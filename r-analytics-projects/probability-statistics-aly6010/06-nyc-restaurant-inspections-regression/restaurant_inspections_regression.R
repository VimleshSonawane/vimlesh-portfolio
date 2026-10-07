# Load necessary libraries
library(tidyverse)

# Load the dataset
data <- read.csv("DOHMH_New_York_City_Restaurant_Inspection_Results_20250629.csv")

# Step 1: Clean and filter the data
data_clean <- data %>%
  filter(!is.na(SCORE), !is.na(BORO), INSPECTION.DATE != "01/01/1900") %>%
  select(SCORE, BORO, CRITICAL.FLAG)

# Convert columns to factors
data_clean$BORO <- as.factor(data_clean$BORO)
data_clean$CRITICAL.FLAG <- as.factor(data_clean$CRITICAL.FLAG)

# Step 2: Dummy variable regression model
dummy_model <- lm(SCORE ~ BORO, data = data_clean)
summary(dummy_model)

# Step 3: Visualization 1 - Jitter plot with mean score by borough
ggplot(data_clean, aes(x = BORO, y = SCORE, color = BORO)) +
  geom_jitter(alpha = 0.3, width = 0.25) +
  stat_summary(fun = mean, geom = "point", shape = 18, size = 3, color = "black") +
  labs(title = "Inspection Scores by Borough",
       y = "Inspection Score",
       x = "Borough") +
  theme_minimal()

# Step 4: Subset data by borough and run regressions
borough_list <- split(data_clean, data_clean$BORO)

# Step 5: Run regression for each borough: SCORE ~ CRITICAL.FLAG
borough_models <- lapply(borough_list, function(subset) {
  lm(SCORE ~ CRITICAL.FLAG, data = subset)
})

# Step 6: Print regression summaries for each borough
for (name in names(borough_models)) {
  cat("\n--- Regression for:", name, "---\n")
  print(summary(borough_models[[name]]))
}

# Step 7: Visualization 2 - Bar chart of average scores by borough (for Part 1)
selected_boros <- c("Manhattan", "Brooklyn", "Queens", "Bronx", "Staten Island")
filtered_data <- data_clean %>%
  filter(BORO %in% selected_boros)

ggplot(filtered_data, aes(x = BORO, y = SCORE, fill = BORO)) +
  stat_summary(fun = mean, geom = "bar", color = "black") +
  labs(title = "Average Inspection Score by Borough",
       x = "Borough",
       y = "Average Inspection Score") +
  theme_minimal() +
  theme(legend.position = "none")

# Step 8: Visualization 3 - Grouped bar chart for violation severity within boroughs (for Part 2)
ggplot(filtered_data, aes(x = CRITICAL.FLAG, y = SCORE, fill = BORO)) +
  stat_summary(fun = mean, geom = "col", position = position_dodge()) +
  labs(
    title = "Average Inspection Scores by Violation Severity and Borough",
    x = "Violation Severity (CRITICAL.FLAG)",
    y = "Average Inspection Score",
    fill = "Borough"
  ) +
  theme_minimal()
