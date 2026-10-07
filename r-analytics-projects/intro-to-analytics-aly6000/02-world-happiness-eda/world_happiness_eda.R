# Vimlesh Sonawane
# April 2025
# ALY 6000 - Project 2
rm(list = ls()) 

# Load required libraries
library(dplyr)
library(ggplot2)
library(janitor)
library(knitr)

# ---------------------------
# Part 1: Happiness Dataset
# ---------------------------

# 1. Read 2015.csv and store in data_2015
data_2015 <- read.csv("2015.csv")
# Print first few rows of data_2015
print(head(data_2015))

# 2. Display column names
names(data_2015)
# Print column names of data_2015
print(names(data_2015))

# 3. View dataset in tab
View(data_2015)

# 4. Glimpse of the dataset
glimpse(data_2015)
# Print the structure of data_2015
print(glimpse(data_2015))

# 5. Clean column names using janitor
data_2015 <- clean_names(data_2015)
# Print cleaned column names
print(names(data_2015))

# 6. Select specific columns for happy_df
happy_df <- data_2015 %>%
  select(country, region, happiness_score, freedom)
# Print first few rows of happy_df
print(head(happy_df))

# 7. First 10 rows
top_ten_df <- happy_df %>%
  slice(1:10)
# Print top 10 rows of happy_df
print(top_ten_df)

# 8. Countries with freedom < 0.20
no_freedom_df <- happy_df %>%
  filter(freedom < 0.20)
# Print countries with low freedom
print(no_freedom_df)

# 9. Countries with highest freedom values
best_freedom_df <- happy_df %>%
  arrange(desc(freedom))
# Print countries with highest freedom
print(best_freedom_df)

# 10. Add gff_stat column
data_2015 <- data_2015 %>%
  mutate(gff_stat = family + freedom + generosity)
# Print the first few rows after adding gff_stat
print(head(data_2015))

# 11. Summary by region
regional_stats_df <- happy_df %>%
  group_by(region) %>%
  summarise(
    country_count = n(),
    mean_happiness = mean(happiness_score, na.rm = TRUE),
    mean_freedom = mean(freedom, na.rm = TRUE)
  )
# Print regional statistics
print(regional_stats_df)

# Visualization

# Top 10 Countries by Happiness Score
kable(top_ten_df, caption = "Top 10 Countries from Happiness Dataset (2015)")

# Distribution of Happiness Scores
ggplot(data_2015, aes(x = happiness_score)) +
  geom_histogram(binwidth = 0.1, fill = "skyblue", color = "black", alpha = 0.7) +
  labs(title = "Distribution of Happiness Scores",
       x = "Happiness Score",
       y = "Number of Countries") +
  theme_minimal()

# Freedom vs. Happiness
ggplot(data_2015, aes(x = freedom, y = happiness_score)) +
  geom_point(color = "orange") +
  geom_smooth(method = "lm", se = FALSE, color = "blue") +
  labs(title = "Freedom vs. Happiness",
       x = "Freedom Score",
       y = "Happiness Score") +
  theme_minimal()

# ---------------------------
# Part 2: Baseball Dataset
# ---------------------------

# 12. Read baseball.csv
baseball <- read.csv("baseball.csv")
# Print first few rows of baseball dataset
print(head(baseball))

# 13. Spend time with the data using various exploration functions
# View dataset 
View(baseball)

# Check the structure of the dataset to see types and any potential issues
str(baseball)
# Print the structure of baseball dataset
print(str(baseball))

# Summary statistics of the dataset
summary(baseball)
# Print summary statistics of baseball dataset
print(summary(baseball))

# Get a quick glimpse of the data
head(baseball)
# Print first few rows of baseball dataset
print(head(baseball))

# Check the column names
colnames(baseball)
# Print column names of baseball dataset
print(colnames(baseball))

# Check for missing values in the dataset
sum(is.na(baseball))
# Print missing value count in baseball dataset
print(sum(is.na(baseball)))

# Show first few rows of the dataset
head(baseball)
# Print first few rows of baseball dataset again
print(head(baseball))

# Display the first few rows for a quick look
glimpse(baseball)
# Print the structure of baseball dataset
print(glimpse(baseball))

# 14. Filter players with AB > 0
baseball <- baseball %>%
  filter(AB > 0)
# Print first few rows of filtered baseball dataset
print(head(baseball))

# 15. Add batting average (BA)
baseball <- baseball %>%
  mutate(BA = H / AB)
# Print first few rows after adding BA
print(head(baseball))

# 16. Add On-Base Percentage (OBP)
baseball <- baseball %>%
  mutate(OBP = (H + BB) / (AB + BB))
# Print first few rows after adding OBP
print(head(baseball))

# 17. Top 10 players by strikeouts
strikeout_artist <- baseball %>%
  arrange(desc(SO)) %>%
  slice(1:10)
# Print top 10 players by strikeouts
print(strikeout_artist)

# 18. Filter eligible players
eligible_df <- baseball %>%
  filter(AB >= 300 | G >= 100)
# Print eligible players
print(head(eligible_df))

# 19. Histogram of BA for eligible players
ggplot(eligible_df, aes(x = BA)) +
  geom_histogram(binwidth = 0.01, fill = "orange", color = "black", alpha = 0.8) +
  geom_vline(xintercept = mean(eligible_df$BA, na.rm = TRUE), linetype = "dashed", color = "blue", linewidth = 1) +
  labs(
    title = "Distribution of Batting Averages for Eligible Players",
    subtitle = "Players with ≥300 AB or ≥100 Games Played",
    x = "Batting Average (BA)",
    y = "Number of Players",
    caption = paste("Mean BA:", round(mean(eligible_df$BA, na.rm = TRUE), 3))
  ) +
  theme_minimal() +
  scale_x_continuous(breaks = seq(0.15, 0.35, by = 0.05), limits = c(0.15, 0.35))

# 20. Analyze the eligible players and select an MVP candidate

# Calculate key statistics for eligible players (OBP, HR, RBI, and BA)
summary_stats <- eligible_df %>%
  summarise(
    avg_OBP = mean(OBP, na.rm = TRUE),
    avg_HR = mean(HR, na.rm = TRUE),
    avg_RBI = mean(RBI, na.rm = TRUE),
    avg_BA = mean(BA, na.rm = TRUE)
  )
# Print summary statistics for eligible players
print(summary_stats)

# Rank players by OBP, HR, and RBI to find the top candidates for MVP
top_players <- eligible_df %>%
  arrange(desc(OBP), desc(HR), desc(RBI)) %>%
  slice(1:10)
# Print top players ranked by OBP, HR, and RBI
print(top_players)

# Identify the MVP candidate: Select the player with the highest OBP and solid performance in HR and RBI
mvp_candidate <- top_players[1, ]
# Print selected MVP candidate
print(mvp_candidate)

# Visualize the top players based on OBP, HR, and RBI for better understanding
ggplot(top_players, aes(x = reorder(Last, OBP), y = OBP, fill = Last)) +
  geom_bar(stat = "identity") +
  coord_flip() +
  labs(
    title = "Top 10 Players by OBP, HR, and RBI",
    x = "Player",
    y = "On-Base Percentage (OBP)"
  ) +
  theme_minimal()

