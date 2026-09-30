# Load libraries
library(ggplot2)
library(dplyr)

# Load dataset (update path as needed)
df <- read.csv("Students Social Media Addiction.csv")

# Basic data structure and summary
str(df)
summary(df)

# ---- Question 1 ----
# Does average daily social media usage affect addicted score?

# Scatterplot with regression line
plot1 <- ggplot(df, aes(x = Avg_Daily_Usage_Hours, y = Addicted_Score)) +
  geom_point(alpha = 0.6) +
  geom_smooth(method = "lm", se = TRUE, color = "blue") +
  labs(title = "Addicted Score vs Average Daily Usage Hours",
       x = "Average Daily Usage Hours",
       y = "Addicted Score") +
  theme_minimal()

print(plot1)

# Correlation test
cor_test1 <- cor.test(df$Avg_Daily_Usage_Hours, df$Addicted_Score)
print(cor_test1)

# Linear regression
model1 <- lm(Addicted_Score ~ Avg_Daily_Usage_Hours, data = df)
summary(model1)

# ---- Question 2 ----
# Is there a relationship between addicted score and mental health score?

plot2 <- ggplot(df, aes(x = Addicted_Score, y = Mental_Health_Score)) +
  geom_point(alpha = 0.6) +
  geom_smooth(method = "lm", se = TRUE, color = "red") +
  labs(title = "Mental Health Score vs Addicted Score",
       x = "Addicted Score",
       y = "Mental Health Score") +
  theme_minimal()

print(plot2)

cor_test2 <- cor.test(df$Addicted_Score, df$Mental_Health_Score)
print(cor_test2)

model2 <- lm(Mental_Health_Score ~ Addicted_Score, data = df)
summary(model2)

# ---- Question 3 ----
# Does addiction score affect sleep hours per night?

plot3 <- ggplot(df, aes(x = Addicted_Score, y = Sleep_Hours_Per_Night)) +
  geom_point(alpha = 0.6) +
  geom_smooth(method = "lm", se = TRUE, color = "green") +
  labs(title = "Sleep Hours Per Night vs Addicted Score",
       x = "Addicted Score",
       y = "Sleep Hours Per Night") +
  theme_minimal()

print(plot3)

cor_test3 <- cor.test(df$Addicted_Score, df$Sleep_Hours_Per_Night)
print(cor_test3)

model3 <- lm(Sleep_Hours_Per_Night ~ Addicted_Score, data = df)
summary(model3)
