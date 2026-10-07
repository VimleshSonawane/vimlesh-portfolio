# Vimlesh Sonawane
# April 2025
# ALY 6000 - Project 1
rm(list = ls())  # This clears the environment

# Problem 1
# Multiplication
result1 <- (123 * 453)
print(result1)

# Exponentiation and Multiplication
result2 <- (5^2 * 40)
print(result2)

# Logical AND
result3 <- (TRUE & FALSE)
print(result3)

# Logical OR
result4 <- (TRUE | FALSE)
print(result4)

# Modulus
result5 <- (75 %% 10)
print(result5)

# Division
result6 <- (75 / 10)
print(result6)

# Problem 2
# Create a vector using the c function with the values 17, 12, -33, 5 and assign it to a variable called first_vector.
first_vector <- c(17, 12, -33, 5)
# print the vector
print(first_vector)

# Problem 3
counting_by_fives <- c(5, 10, 15, 20, 25, 30, 35)
print(counting_by_fives)

# Problem 4
second_vector <- 20:1
print(second_vector)

# Problem 5
counting_vector <- 5:15
print(counting_vector)

# Problem 6
grades <- c(96, 100, 85, 92, 81, 72)
print(grades)

# Problem 7
bonus_points_added <- grades + 3
print(bonus_points_added)

# Problem 8
one_to_one_hundred <- 1:100
print(one_to_one_hundred)

# Problem 9
# Add 20 to each element of second_vector
print(second_vector + 20)

# Multiply each element of second_vector by 20
print(second_vector * 20)

# Return TRUE if element is greater than or equal to 20
print(second_vector >= 20)

# Return TRUE if element is not equal to 20
print(second_vector != 20)

# Problem 10
total <- sum(one_to_one_hundred)
print(total)

# Problem 11
average_value <- mean(one_to_one_hundred)
print(average_value)

# Problem 12
median_value <- median(one_to_one_hundred)
print(median_value)

# Problem 13
max_value <- max(one_to_one_hundred)
print(max_value)

# Problem 14
min_value <- min(one_to_one_hundred)
print(min_value)

# Problem 15
first_value <- second_vector[1]
print(first_value)

# Problem 16
first_three_values <- second_vector[1:3]
print(first_three_values)

# Problem 17
vector_from_brackets <- second_vector[c(1, 5, 10, 11)]
print(vector_from_brackets)

# Problem 18
vector_from_boolean_brackets <- first_vector[c(FALSE, TRUE, FALSE, TRUE)]
# Only elements with TRUE in the logical vector are extracted
print(vector_from_boolean_brackets)

# Problem 19
# This returns a logical vector indicating whether each element of second_vector is greater than or equal to 10
print(second_vector >= 10)

# Problem 20
# This returns only the values from one_to_one_hundred that are greater than or equal to 20
print(one_to_one_hundred[one_to_one_hundred >= 20])

# Problem 21
lowest_grades_removed <- grades[grades > 85]
print(lowest_grades_removed)

# Problem 22
middle_grades_removed <- grades[-c(3, 4)]
print(middle_grades_removed)

# Problem 23
fifth_vector <- second_vector[-c(5, 10)]
print(fifth_vector)

# Problem 24
set.seed(5)
random_vector <- runif(n = 10, min = 0, max = 1000)
print(random_vector)

# Problem 25
sum_vector <- sum(random_vector)
print(sum_vector)

# Problem 26
cumsum_vector <- cumsum(random_vector)
print(cumsum_vector)

# Problem 27
mean_vector <- mean(random_vector)
print(mean_vector)

# Problem 28
sd_vector <- sd(random_vector)
print(sd_vector)

# Problem 29
round_vector <- round(random_vector)
print(round_vector)

# Problem 30
sort_vector <- sort(random_vector)
print(sort_vector)

# Problem 31
# Download the datafile ds_salaries.csv from Canvas. Save it in the same folder as your R file.

# Problem 32
# Load the dataset ds_salaries.csv
first_dataframe <- read.csv("ds_salaries.csv")
summary(first_dataframe)

# Problem 33
# Use the summary function with first_dataframe to produce summary statistics
first_dataframe <- read.csv("ds_salaries.csv")
summary(first_dataframe)

# Visualization
# Histogram : Salary Distribution
hist(first_dataframe$salary_in_usd, main="Salary Distribution", xlab="Salary (USD)", col="skyblue")

# Barplot : Experience Level Count
barplot(table(first_dataframe$experience_level), main="Experience Level Count", col="orange")
