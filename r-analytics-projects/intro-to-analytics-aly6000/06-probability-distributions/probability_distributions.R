# Name: Vimlesh Sonawane
# Class: ALY 6000
# Date: 20 May 2025

# Clear environment
rm(list = ls())

# Load libraries
library(dplyr)
library(ggplot2)
library(tidyr)
library(janitor)
library(palmerpenguins)
library(knitr)

# ===============================
# Binomial Distribution
# ===============================
prob1_result <- dbinom(5, size = 7, prob = 0.65)

prob2_result <- data.frame(
  wins = 0:7,
  probability = dbinom(0:7, size = 7, prob = 0.65)
)

prob3_result <- pbinom(4, size = 7, prob = 0.65)

prob4_result <- pbinom(5, size = 7, prob = 0.65) - pbinom(2, size = 7, prob = 0.65)

prob5_result <- pbinom(4, size = 7, prob = 0.65, lower.tail = FALSE)

prob6_result <- 7 * 0.65

prob7_result <- 7 * 0.65 * (1 - 0.65)

set.seed(10)
prob8_result <- rbinom(1000, size = 7, prob = 0.65)

prob9_result <- mean(prob8_result)

prob10_result <- var(prob8_result)

# ===============================
# Poisson Distribution
# ===============================
prob11_result <- dpois(6, lambda = 7)

prob12_result <- ppois(40, lambda = 56)

prob13_result <- ppois(274, lambda = 280, lower.tail = FALSE)

prob14_result <- ppois(274, lambda = 224, lower.tail = FALSE)

prob15_result <- qpois(0.9, lambda = 56)

set.seed(15)
prob16_result <- rpois(1000, lambda = 56)

prob17_result <- mean(prob16_result)

prob18_result <- var(prob16_result)

# ===============================
# Normal Distribution
# ===============================
prob19_result <- pnorm(2200, mean = 2000, sd = 100) - pnorm(1800, mean = 2000, sd = 100)

prob20_result <- pnorm(2500, mean = 2000, sd = 100, lower.tail = FALSE)

prob21_result <- ceiling(qnorm(0.10, mean = 2000, sd = 100))

set.seed(25)
prob22_result <- rnorm(10000, mean = 2000, sd = 100)

prob23_result <- mean(prob22_result)

prob24_result <- sd(prob22_result)

set.seed(1)
prob25_result <- replicate(1000, mean(sample(prob22_result, size = 100, replace = TRUE)))

# ===============================
# Graphs and Visualizations
# ===============================

# Problem 22: Histogram of Simulated Bulb Lifespans
hist_bulbs <- ggplot(data.frame(lifespan = prob22_result), aes(x = lifespan)) +
  geom_histogram(binwidth = 20, fill = "darkcyan", color = "white") +
  labs(title = "Simulated Lifespans of 10,000 Light Bulbs", x = "Lifespan (hours)", y = "Frequency") +
  theme_minimal()
print(hist_bulbs)

# Problem 26: Histogram of 1,000 Sample Means
hist_sample_means <- ggplot(data.frame(sample_means = prob25_result), aes(x = sample_means)) +
  geom_histogram(binwidth = 1, fill = "steelblue", color = "white") +
  labs(title = "Histogram of 1,000 Sample Means", x = "Sample Mean", y = "Frequency") +
  theme_minimal()
print(hist_sample_means)

# Problem 28: Histogram of Flipper Length – Adelie Penguins
adelie_data <- filter(penguins, species == "Adelie")
hist_flipper_adelie <- ggplot(adelie_data, aes(x = flipper_length_mm)) +
  geom_histogram(binwidth = 2, fill = "lightblue", color = "black") +
  labs(title = "Distribution of Flipper Length - Adelie Penguins", x = "Flipper Length (mm)", y = "Count") +
  theme_minimal()
print(hist_flipper_adelie)

# Problem 29: Scatter Plot – Flipper Length vs Beak Depth (Gentoo Penguins)
gentoo_data <- filter(penguins, species == "Gentoo")
scatter_gentoo <- ggplot(gentoo_data, aes(x = flipper_length_mm, y = bill_depth_mm)) +
  geom_point(color = "darkorange", alpha = 0.6) +
  labs(title = "Flipper Length vs Beak Depth - Gentoo Penguins", x = "Flipper Length (mm)", y = "Beak Depth (mm)") +
  theme_light()
print(scatter_gentoo)

# Optional: Density Plot of Sample Means
density_sample_means <- ggplot(data.frame(sample_means = prob25_result), aes(x = sample_means)) +
  geom_density(fill = "skyblue", alpha = 0.5) +
  labs(title = "Density of Sample Means (n = 1000)", x = "Sample Mean", y = "Density") +
  theme_minimal()
print(density_sample_means)

# ===============================
# Summary Tables for Report
# ===============================

# Table 1: Summary statistics for Gentoo Penguins
gentoo_summary <- gentoo_data %>%
  summarise(
    mean_flipper = mean(flipper_length_mm, na.rm = TRUE),
    mean_beak_depth = mean(bill_depth_mm, na.rm = TRUE),
    mean_body_mass = mean(body_mass_g, na.rm = TRUE)
  )
kable(gentoo_summary, caption = "Summary Statistics – Gentoo Penguins", format = "pipe")

# Table 2: Count of penguins by species
species_count <- penguins %>%
  group_by(species) %>%
  summarise(count = n())
kable(species_count, caption = "Penguin Counts by Species", format = "pipe")

# Table 3: Average body mass by species and sex
mass_by_group <- penguins %>%
  group_by(species, sex) %>%
  summarise(avg_mass = mean(body_mass_g, na.rm = TRUE), .groups = "drop")
kable(mass_by_group, caption = "Average Body Mass by Species and Sex", format = "pipe")
