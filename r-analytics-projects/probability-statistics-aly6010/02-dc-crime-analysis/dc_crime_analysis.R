# Vimlesh Sonawane
# ALY 6010
# Module 2 - Crime Data Analysis

library(tidyverse)
library(janitor)
library(psych)
library(lubridate)

# ============================
# Load and Clean Dataset
# ============================
df <- read.csv("Crime_Incidents_in_2024.csv")
df <- clean_names(df)

# Convert report_dat to datetime and extract hour
df$report_dat <- as.POSIXct(df$report_dat, format = "%Y/%m/%d %H:%M:%S", tz = "UTC")
df$hour <- hour(df$report_dat)

# ============================
# PART 1 - DESCRIPTIVE STATISTICS
# ============================

# Overall summary
summary_all <- describe(df)
print(summary_all)

# Grouped summary by offense
if ("offense" %in% colnames(df)) {
  summary_by_offense <- df %>%
    group_by(offense) %>%
    summarise(across(where(is.numeric), list(
      mean = ~round(mean(.x, na.rm = TRUE), 2),
      sd = ~round(sd(.x, na.rm = TRUE), 2),
      min = ~min(.x, na.rm = TRUE),
      max = ~max(.x, na.rm = TRUE),
      N = ~sum(!is.na(.x))
    ), .names = "{.col}_{.fn}"))
  
  print(summary_by_offense)
}

# ============================
# PART 2 - VISUALIZATIONS
# ============================

# Scatter Plot: Crime Locations
plot(df$longitude, df$latitude,
     main = "Scatter Plot of Crime Locations",
     xlab = "Longitude", ylab = "Latitude",
     col = "red", pch = 16)
abline(h = mean(df$latitude, na.rm = TRUE), col = "blue", lty = 2)
abline(v = mean(df$longitude, na.rm = TRUE), col = "blue", lty = 2)

# Jitter Plot: Hour of Crime by Offense Type
ggplot(df, aes(x = offense, y = hour)) +
  geom_jitter(width = 0.3, height = 0.3, alpha = 0.3, color = "darkorange") +
  labs(title = "Jitter Plot: Hour of Crime by Offense Type",
       x = "Offense Type", y = "Hour of Day") +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))

# Boxplot: Hour of Crime by Offense
boxplot(hour ~ offense, data = df,
        main = "Boxplot: Crime Hour by Offense",
        xlab = "Offense", ylab = "Hour of Day",
        col = "lightblue", las = 2)
abline(h = 9, col = "darkgreen", lty = 2)   # Start of workday
abline(h = 17, col = "darkgreen", lty = 2)  # End of workday
