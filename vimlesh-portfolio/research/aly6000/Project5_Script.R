# Name: Vimlesh Sonawane
# Class: ALY 6000
# Date: 3 May

rm(list = ls())

library(readr)
library(dplyr)
library(ggplot2)
library(tidyr)
library(tibble)

ball_data <- read_csv("ball-dataset.csv")

# STEP 2: Frequency of Colors
freq_color <- ball_data %>%
  count(color, name = "count")
print(freq_color)

# STEP 3: Frequency of Labels
freq_label <- ball_data %>%
  count(label, name = "count")
print(freq_label)

# STEP 4: Bar Chart - Colors
ggplot(freq_color, aes(x = color, y = count, fill = color)) +
  geom_bar(stat = "identity") +
  labs(title = "Ball Color Frequency", x = "Color", y = "Count") +
  theme_minimal()

# STEP 5: Bar Chart - Labels
ggplot(freq_label, aes(x = label, y = count, fill = label)) +
  geom_bar(stat = "identity") +
  labs(title = "Ball Label Frequency", x = "Label", y = "Count") +
  theme_minimal()

# STEP 6–13: Probability Calculations
total_balls <- nrow(ball_data)

prob6_result <- sum(ball_data$color == "green") / total_balls
prob7_result <- sum(ball_data$color %in% c("blue", "red")) / total_balls
prob8_result <- sum(ball_data$label %in% c("A", "C")) / total_balls
prob9_result <- sum(ball_data$color == "yellow" & ball_data$label == "D") / total_balls
prob10_result <- sum(ball_data$color == "yellow" | ball_data$label == "D") / total_balls

blue_balls <- sum(ball_data$color == "blue")
red_balls <- sum(ball_data$color == "red")
prob11_result <- (blue_balls / total_balls) * (red_balls / (total_balls - 1))

green_balls <- sum(ball_data$color == "green")
prob12_result <- if (green_balls >= 4) {
  prod((green_balls: (green_balls - 3)) / (total_balls: (total_balls - 3)))
} else {
  0
}

red_balls <- sum(ball_data$color == "red")
label_b_balls <- sum(ball_data$label == "B")
red_and_b_balls <- sum(ball_data$color == "red" & ball_data$label == "B")

# Corrected logic for Problem 13
red_balls <- sum(ball_data$color == "red")
label_b_balls <- sum(ball_data$label == "B")
red_and_b_balls <- sum(ball_data$color == "red" & ball_data$label == "B")
total_balls <- nrow(ball_data)

# Case 1: red but not labeled B, then labeled B
prob_red_not_b_then_b <- (red_balls - red_and_b_balls) / total_balls * (label_b_balls / (total_balls - 1))

# Case 2: red and labeled B, then one fewer B
prob_red_b_then_b <- red_and_b_balls / total_balls * ((label_b_balls - 1) / (total_balls - 1))

# Final result
prob13_result <- prob_red_not_b_then_b + prob_red_b_then_b


# STEP 14: Custom Factorial Function
my_factorial <- function(n) {
  if (n == 0) return(1)
  prod(1:n)
}

# COIN FLIPPING PROBLEMS
coin_outcomes <- crossing(
  flip1 = c("H", "T"),
  flip2 = c("H", "T"),
  flip3 = c("H", "T"),
  flip4 = c("H", "T")
)

coin_outcomes <- coin_outcomes %>%
  rowwise() %>%
  mutate(
    num_heads = sum(c(flip1, flip2, flip3, flip4) == "H"),
    probability = prod(c(0.6, 0.4)[c(flip1, flip2, flip3, flip4) == c("H", "T")])
  ) %>%
  ungroup()

num_heads_prob <- coin_outcomes %>%
  count(num_heads, name = "count") %>%
  mutate(probability = count / sum(count))

prob18_result <- sum(coin_outcomes$probability[coin_outcomes$num_heads == 3])
prob19_result <- sum(coin_outcomes$probability[coin_outcomes$num_heads %in% c(2, 4)])
prob20_result <- sum(coin_outcomes$probability[coin_outcomes$num_heads <= 3])

ggplot(num_heads_prob, aes(x = factor(num_heads), y = probability)) +
  geom_bar(stat = "identity", fill = "cyan", color = "black") +
  labs(
    title = "Probability Distribution of Number of Heads (4 Coin Flips)",
    x = "Number of Heads",
    y = "Probability"
  ) +
  theme_minimal()

# SOCCER GAME CHALLENGE
p_home <- 0.75
p_away <- 0.50

prob22_result <- (p_home^5) * (p_away^5)

prob_0_wins <- (1 - p_home)^5 * (1 - p_away)^5
prob_1_home <- choose(5, 1) * p_home * (1 - p_home)^4 * (1 - p_away)^5
prob_1_away <- choose(5, 1) * p_away * (1 - p_away)^4 * (1 - p_home)^5
prob_0_or_1_win <- prob_0_wins + prob_1_home + prob_1_away
prob23_result <- 1 - prob_0_or_1_win

prob24_result <- choose(5, 3) * choose(5, 2)
