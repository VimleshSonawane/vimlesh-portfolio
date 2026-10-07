# Name: Vimlesh Sonawane
# Class: ALY 6000
# Date: 3 May

rm(list = ls())

library(janitor)
library(dplyr)
library(ggplot2)
library(tidyr)
library(knitr)

diabetes <- read.csv("Diabetes.csv")

# ==========================
# Part I – Exploring
# ==========================

# 1. Review any written description of your dataset
# Description: This dataset contains biometric indicators (glucose, insulin, BMI, age, etc.) and a classification indicating whether the person has diabetes.

# 2. Clean your data. Cleaning involves any task that prepares the dataset for analysis.

# 2a. Rename columns
diabetes <- clean_names(diabetes)
print(names(diabetes))  

# 2b. Manage NAs (convert 0s to NA in select columns)
diabetes <- diabetes %>%
  mutate(across(c(pg_concentration, diastolic_bp, tri_fold_thick, serum_ins, bmi), ~ na_if(., 0)))
print(summary(diabetes))  

# 2c. Correct data types
diabetes$diabetes <- as.factor(diabetes$diabetes)
print(str(diabetes$diabetes))  

# 2d. Remove rows with NAs
diabetes <- na.omit(diabetes)
print(dim(diabetes))  

# 2e. Manipulate strings – Not required in this dataset
# 2f. Reorganize data – Already handled
# 2g. Final structure check

print(glimpse(diabetes))

# ==========================
# Part II – Expanding
# ==========================

# 1. Create Age Group
diabetes <- diabetes %>%
  mutate(age_group = case_when(
    age < 30 ~ "Under 30",
    age >= 30 & age < 50 ~ "30–49",
    age >= 50 ~ "50+"
  ))

# 2. Average BMI by age group and diabetes status
bmi_by_group <- diabetes %>%
  group_by(age_group, diabetes) %>%
  summarise(avg_bmi = mean(bmi), .groups = "drop")
kable(bmi_by_group, format = 'pipe', align = 'c')  

# 2b. Average Glucose by age group
glucose_by_age_group <- diabetes %>%
  group_by(age_group) %>%
  summarise(avg_glucose = mean(pg_concentration), .groups = 'drop')
kable(glucose_by_age_group, format = 'pipe', align = 'c')  

# 3. Summary statistics
summary_stats <- diabetes %>%
  summarise(
    avg_glucose = mean(pg_concentration),
    avg_bmi = mean(bmi),
    avg_age = mean(age),
    diabetes_rate = mean(diabetes == "Sick")
  )
kable(summary_stats, format = 'pipe', align = 'c')

# 4. BMI category vs diabetes
bmi_groups <- diabetes %>%
  mutate(bmi_category = case_when(
    bmi < 18.5 ~ "Underweight",
    bmi >= 18.5 & bmi < 25 ~ "Normal",
    bmi >= 25 & bmi < 30 ~ "Overweight",
    bmi >= 30 ~ "Obese"
  )) %>%
  group_by(bmi_category, diabetes) %>%
  summarise(count = n(), .groups = 'drop') %>%
  pivot_wider(names_from = diabetes, values_from = count, values_fill = 0)
kable(bmi_groups, format = 'pipe', align = 'c') 

# 5. Insulin and triceps by diabetes
insulin_triceps <- diabetes %>%
  group_by(diabetes) %>%
  summarise(
    mean_insulin = mean(serum_ins, na.rm = TRUE),
    mean_thickness = mean(tri_fold_thick, na.rm = TRUE),
    .groups = 'drop'
  )
kable(insulin_triceps, format = 'pipe', align = 'c')

# ==========================
# Part III – Visualizations
# ==========================

# 1. Histogram: BMI
hist_bmi <- ggplot(diabetes, aes(x = bmi, fill = diabetes)) +
  geom_histogram(binwidth = 2, alpha = 0.7, position = "identity") +
  labs(title = "BMI Distribution by Diabetes Status", x = "BMI", y = "Count") +
  theme_minimal()
print(hist_bmi)

# 2. Scatter: Glucose vs Age
scatter_plot <- ggplot(diabetes, aes(x = age, y = pg_concentration, color = diabetes)) +
  geom_point(alpha = 0.6) +
  labs(title = "Glucose vs Age by Diabetes Status", x = "Age", y = "Glucose Level") +
  theme_light()
print(scatter_plot)

# 3. Boxplot: Age
box_age <- ggplot(diabetes, aes(x = diabetes, y = age, fill = diabetes)) +
  geom_boxplot() +
  labs(title = "Age Distribution by Diabetes Status", x = "Diabetes", y = "Age") +
  theme_classic()
print(box_age)

# 4. Bar: BMI by Age Group
bar_bmi <- ggplot(bmi_by_group, aes(x = age_group, y = avg_bmi, fill = diabetes)) +
  geom_col(position = "dodge") +
  labs(title = "Average BMI by Age Group & Diabetes", x = "Age Group", y = "Average BMI") +
  theme_minimal()
print(bar_bmi)


