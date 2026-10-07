# NYC restaurant inspections regression

**Dataset:** NYC DOHMH restaurant inspection results, all five boroughs

**Methods:** Dummy-variable regression and borough-level subset regressions

## Key findings

- Using the Bronx as reference (average score 23.14), Queens and Brooklyn scored significantly worse and Staten Island better
- Critical violations drove scores up in every borough, making severity a stronger driver than location

## Files

- [`restaurant_inspections_regression.R`](restaurant_inspections_regression.R)
- [`report.docx`](report.docx)

## Run it

Packages: `tidyverse`

Place the dataset file in this folder (the script reads it by file name), then run the script in R or RStudio.
