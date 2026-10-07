# Final project: social media addiction, mental health, and sleep

**Dataset:** Survey of 705 students aged 18–24 (`Students Social Media Addiction.csv`)

**Methods:** Simple linear regression, correlation, and t-tests

## Key findings

- Daily usage hours strongly predicted addiction score (r = 0.83, R² = 0.69, p < 0.001)
- Addiction was strongly linked to worse mental health (r = −0.95, R² = 0.89, p < 0.001)
- Each point of addiction cost about half an hour of sleep per night (R² = 0.58, p < 0.001)
- Students who felt social media hurt their grades scored far higher on addiction (7.46 vs. 4.60, p < 0.0001)
- No significant difference in addiction scores between male and female students (p = 0.19)

## Files

- [`regression_analysis.R`](regression_analysis.R)
- [`final_report.docx`](final_report.docx)
- [`milestone2_t_tests.R`](milestone2_t_tests.R)
- [`milestone2_report.docx`](milestone2_report.docx)

## Run it

Packages: `ggplot2`, `dplyr`

Place the dataset file in this folder (the script reads it by file name), then run the script in R or RStudio.
