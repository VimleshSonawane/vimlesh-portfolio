# Biometric indicators of diabetes risk

**Dataset:** Pima Indians Diabetes dataset (`Diabetes.csv`)

**Methods:** Data cleaning, reshaping with tidyr, and comparative visualization of glucose, BMI, insulin, and pedigree function

## Key findings

- Cleaned invalid zero-values in glucose, BMI, and insulin before analysis, so results reflect real measurements
- Compared biometric profiles of diabetic and non-diabetic patients

## Files

- [`diabetes_risk_factors.R`](diabetes_risk_factors.R)
- [`report.pdf`](report.pdf)

## Run it

Packages: `janitor`, `dplyr`, `ggplot2`, `tidyr`, `knitr`

Place the dataset file in this folder (the script reads it by file name), then run the script in R or RStudio.
