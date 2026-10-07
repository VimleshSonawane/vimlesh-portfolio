# Load necessary libraries
library(dplyr)

# -----------------------------------------------------------
# 1. Load and prepare the dataset
# -----------------------------------------------------------

student_data <- read.csv("Students Social Media Addiction.csv", stringsAsFactors = FALSE)

# Clean column names: Replace spaces with underscores
colnames(student_data) <- gsub(" ", "_", colnames(student_data))

# Convert categorical variables to factors
student_data$Gender <- as.factor(student_data$Gender)
student_data$Academic_Level <- as.factor(student_data$Academic_Level)
student_data$Country <- as.factor(student_data$Country)
student_data$Most_Used_Platform <- as.factor(student_data$Most_Used_Platform)
student_data$Relationship_Status <- as.factor(student_data$Relationship_Status)

# Ensure binary variable is formatted correctly
student_data$Affects_Academic_Performance <- ifelse(student_data$Affects_Academic_Performance == "Yes", "Yes", "No")
student_data$Affects_Academic_Performance <- as.factor(student_data$Affects_Academic_Performance)

# Convert numeric variables
student_data$Age <- as.integer(student_data$Age)
student_data$Avg_Daily_Usage_Hours <- as.numeric(student_data$Avg_Daily_Usage_Hours)
student_data$Sleep_Hours_Per_Night <- as.numeric(student_data$Sleep_Hours_Per_Night)
student_data$Mental_Health_Score <- as.numeric(student_data$Mental_Health_Score)
student_data$Conflicts_Over_Social_Media <- as.integer(student_data$Conflicts_Over_Social_Media)
student_data$Addicted_Score <- as.integer(student_data$Addicted_Score)

# -----------------------------------------------------------
# 2. Hypothesis Testing
# -----------------------------------------------------------

# --- Test 1: Do students who say social media affects academics have higher addiction scores?
group1 <- student_data$Addicted_Score[student_data$Affects_Academic_Performance == "Yes"]
group2 <- student_data$Addicted_Score[student_data$Affects_Academic_Performance == "No"]

t_test1 <- t.test(group1, group2, alternative = "greater", var.equal = FALSE)
print("Test 1: Addiction Score vs Academic Impact")
print(t_test1)

# --- Test 2: Do students sleep less than 7 hours on average?
t_test2 <- t.test(student_data$Sleep_Hours_Per_Night, mu = 7, alternative = "less")
print("Test 2: Sleep Hours < 7")
print(t_test2)

# --- Test 3: Is there a gender difference in addiction scores?
t_test3 <- t.test(Addicted_Score ~ Gender, data = student_data)
print("Test 3: Addiction Score by Gender")
print(t_test3)

