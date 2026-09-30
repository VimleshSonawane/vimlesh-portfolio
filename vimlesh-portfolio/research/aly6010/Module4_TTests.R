# Week 4
# ALY 6010 
# Vimlesh Sonawane

# Load necessary libraries
library(MASS)
library(ggplot2)

# -----------------------------------
# PART 1: Two-Sample T-Test (Cats Dataset)
# -----------------------------------

# Explore the structure of the dataset
str(cats)

# Subset male and female data
male <- subset(cats, Sex == "M")
female <- subset(cats, Sex == "F")

# Perform Welch’s Two-Sample T-Test (unequal variance)
t_test_cats <- t.test(male$Bwt, female$Bwt, var.equal = FALSE)
print("=== Two-Sample T-Test Result (Cats Dataset) ===")
print(t_test_cats)

# Boxplot of Body Weight by Sex
ggplot(cats, aes(x = Sex, y = Bwt, fill = Sex)) +
  geom_boxplot() +
  labs(title = "Boxplot of Cat Body Weight by Sex",
       x = "Sex",
       y = "Body Weight (kg)") +
  theme_minimal()

# -----------------------------------
# PART 2: Paired T-Test (Sleep Quality)
# -----------------------------------

# Sleep quality scores
before <- c(4.6, 7.8, 9.1, 5.6, 6.9, 8.5, 5.3, 7.1, 3.2, 4.4)
after  <- c(6.6, 7.7, 9.0, 6.2, 7.8, 8.3, 5.9, 6.5, 5.8, 4.9)

# Perform Paired T-Test (one-tailed)
t_test_sleep <- t.test(after, before, paired = TRUE, alternative = "greater")
print("=== Paired T-Test Result (Sleep Quality) ===")
print(t_test_sleep)

# Line Plot: Sleep Quality Before and After
participants <- 1:10
sleep_df <- data.frame(
  Participant = rep(participants, 2),
  Score = c(before, after),
  Time = rep(c("Before", "After"), each = 10)
)

ggplot(sleep_df, aes(x = Participant, y = Score, color = Time, group = Time)) +
  geom_line(size = 1) +
  geom_point(size = 3) +
  labs(title = "Sleep Quality Before and After Meditation",
       x = "Participant",
       y = "Sleep Quality (0–10)") +
  theme_minimal()

# Histogram: Difference in Sleep Quality
diffs <- after - before
diff_df <- data.frame(Difference = diffs)

ggplot(diff_df, aes(x = Difference)) +
  geom_histogram(binwidth = 0.5, fill = "skyblue", color = "black") +
  geom_vline(aes(xintercept = mean(Difference)), color = "red", linetype = "dashed") +
  labs(title = "Histogram of Sleep Quality Differences",
       x = "Difference (After - Before)",
       y = "Frequency") +
  theme_minimal()
