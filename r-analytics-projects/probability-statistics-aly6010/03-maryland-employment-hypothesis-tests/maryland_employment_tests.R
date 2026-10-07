# ALY 6010 - Week 3
# Vimlesh Sonawane
# MODULE 3: Hypothesis Testing with Enhanced Visualizations

# Load libraries
library(tidyverse)

# Load dataset
df <- read.csv("Employment__Unemployment__and_Labor_Force_Data.csv")

# -------------------------------
# Hypothesis Tests
# -------------------------------

# One-sample t-test on Employment Rate
t_test_result <- t.test(df$Employment.Rate, mu = 65)
print("One-Sample t-test for Employment Rate")
print(t_test_result)

# Proportion test: Unemployment Rate > 6%
df$High_Unemployment <- ifelse(df$Unemployment.Rate > 6, 1, 0)
successes <- sum(df$High_Unemployment)
total <- nrow(df)

prop_test_result <- prop.test(x = successes, n = total, p = 0.25)
print("Proportion Test for High Unemployment (>6%)")
print(prop_test_result)

# -------------------------------
# Enhanced Visualizations
# -------------------------------

# 1. Histogram of Employment Rate with 65% reference line
ggplot(df, aes(x = Employment.Rate)) +
  geom_histogram(binwidth = 0.2, fill = "#69b3a2", color = "black") +
  geom_vline(xintercept = 65, color = "#e63946", linetype = "dashed", size = 1) +
  labs(
    title = "Distribution of Employment Rate in Maryland",
    x = "Employment Rate (%)",
    y = "Frequency (Number of Months)"
  ) +
  annotate("text", x = 65.5, y = 15, label = "65% Benchmark", color = "#e63946", size = 4, hjust = 0) +
  theme_minimal()

# 2. Boxplots of Labor Market Indicators with renaming
df_long <- df %>%
  select(
    `Employment Rate` = Employment.Rate,
    `Unemployment Rate` = Unemployment.Rate,
    `Labor Force Participation Rate` = Labor.Force.Participation.Rate
  ) %>%
  pivot_longer(cols = everything(), names_to = "Indicator", values_to = "Value")

ggplot(df_long, aes(x = Indicator, y = Value, fill = Indicator)) +
  geom_boxplot(alpha = 0.7, color = "black") +
  scale_fill_manual(values = c(
    "Employment Rate" = "#0077b6",
    "Unemployment Rate" = "#d62828",
    "Labor Force Participation Rate" = "#f4a261"
  )) +
  labs(
    title = "Boxplot Comparison of Labor Market Indicators",
    x = "Indicator",
    y = "Percentage (%)"
  ) +
  theme_minimal() +
  theme(legend.position = "none")

# 3. Histogram of Unemployment Rate with 6% reference line
ggplot(df, aes(x = Unemployment.Rate)) +
  geom_histogram(binwidth = 0.1, fill = "#ffb703", color = "black") +
  geom_vline(xintercept = 6, color = "#023047", linetype = "dashed", size = 1) +
  labs(
    title = "Distribution of Unemployment Rate in Maryland",
    x = "Unemployment Rate (%)",
    y = "Frequency (Number of Months)"
  ) +
  annotate("text", x = 6.1, y = 10, label = "6% Threshold", color = "#023047", size = 4, hjust = 0) +
  theme_minimal()

