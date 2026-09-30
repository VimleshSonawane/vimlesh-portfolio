# Module 5 - NYC Motor Vehicle Collisions Analysis

# Load Required Libraries
library(ggplot2)
library(dplyr)
library(tidyr)
library(readr)
library(lubridate)
library(stringr)
library(stargazer)
library(RColorBrewer)
library(plotly)

# --------------------------------------------
# STEP 1: Load and Clean the Dataset
# --------------------------------------------
collisions <- read_csv("h9gi-nx95.csv")

collisions_clean <- collisions %>%
  mutate(
    hour = as.numeric(str_sub(crash_time, 1, 2)),
    borough_num = as.numeric(factor(borough)),
    vehicle_count = rowSums(!is.na(select(., starts_with("vehicle_type_code")))),
    number_of_persons_injured = as.numeric(number_of_persons_injured),
    zip_numeric = as.numeric(zip_code)
  ) %>%
  select(
    number_of_persons_injured,
    hour,
    vehicle_count,
    borough_num,
    zip_numeric,
    borough
  ) %>%
  filter(!is.na(number_of_persons_injured)) %>%
  drop_na()

# --------------------------------------------
# STEP 2: Correlation Analysis
# --------------------------------------------
cor_matrix <- cor(collisions_clean[, c("number_of_persons_injured", "vehicle_count", "hour", "borough_num", "zip_numeric")])
injury_cor <- cor_matrix[, "number_of_persons_injured"]
injury_cor <- injury_cor[names(injury_cor) != "number_of_persons_injured"]

injury_cor_df <- data.frame(
  Variable = names(injury_cor),
  Correlation = injury_cor
) %>%
  mutate(Interpretation = case_when(
    Variable == "vehicle_count" ~ "More vehicles → more injuries",
    Variable == "hour" ~ "Time of crash affects injury rate",
    Variable == "borough_num" ~ "Location may impact severity",
    Variable == "zip_numeric" ~ "ZIP code has weak influence"
  ))

# Correlation Bar Plot (Understandable & Colored)
ggplot(injury_cor_df, aes(x = reorder(Variable, Correlation), y = Correlation, fill = Variable)) +
  geom_bar(stat = "identity", show.legend = FALSE) +
  geom_text(aes(label = round(Correlation, 2)), vjust = -0.2, size = 4) +
  geom_text(aes(label = Interpretation), vjust = 1.5, size = 3.5, color = "black") +
  scale_fill_brewer(palette = "Set2") +
  labs(title = "What Factors Correlate with Injury Count?",
       x = "Variable", y = "Correlation with Injuries") +
  theme_minimal() +
  theme(
    plot.title = element_text(hjust = 0.5, size = 14),
    axis.text.x = element_text(angle = 30, hjust = 1)
  )

# --------------------------------------------
# STEP 3: Regression Analysis
# --------------------------------------------
reg_model <- lm(number_of_persons_injured ~ vehicle_count + hour + borough_num + zip_numeric, data = collisions_clean)

# Add predicted values to the dataset
collisions_clean$Predicted <- predict(reg_model)

# Console Summary
summary(reg_model)

# Export table in clean format
stargazer(reg_model, type = "text", title = "Regression Model: Injuries per Crash", digits = 3)

# --------------------------------------------
# STEP 4: Residuals Plot (Enhanced)
# --------------------------------------------
res_df <- data.frame(
  Fitted = reg_model$fitted.values,
  Residuals = reg_model$residuals,
  AbsResiduals = abs(reg_model$residuals)
)

ggplot(res_df, aes(x = Fitted, y = Residuals)) +
  geom_point(aes(color = AbsResiduals), alpha = 0.6, size = 2) +
  scale_color_gradient(low = "skyblue", high = "red") +
  geom_smooth(method = "loess", se = FALSE, color = "black") +
  geom_hline(yintercept = 0, color = "darkgreen", linetype = "dashed") +
  labs(title = "How Good Are Our Injury Predictions?",
       subtitle = "Residuals vs Predicted Injuries",
       x = "Predicted Injuries", y = "Prediction Error (Residuals)",
       color = "Error Magnitude") +
  theme_minimal() +
  theme(
    plot.title = element_text(hjust = 0.5),
    plot.subtitle = element_text(hjust = 0.5)
  )
