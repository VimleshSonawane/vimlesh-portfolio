# NYC motor vehicle collisions regression

**Dataset:** 100,000 NYPD-reported collisions, NYC Open Data (`h9gi-nx95.csv`)

**Methods:** Correlation and multiple regression on injury counts

## Key findings

- Vehicle count was the strongest predictor of injuries, and crash hour was also significant
- Borough and ZIP code had only minor effects
- The model explained little variance (R² = 0.018), which is typical for messy real-world urban data and is reported as-is

## Files

- [`nyc_crash_regression.R`](nyc_crash_regression.R)
- [`report.docx`](report.docx)

## Run it

Packages: `ggplot2`, `dplyr`, `tidyr`, `readr`, `lubridate`, `stringr`, `stargazer`, `RColorBrewer`, `plotly`

Place the dataset file in this folder (the script reads it by file name), then run the script in R or RStudio.
