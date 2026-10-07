# Name: Vimlesh Sonawane
# Class: ALY 6000
# Date: 28 April

# Reset environment
rm(list = ls())

# Load libraries
library(janitor)
library(lubridate)
library(dplyr)
library(ggplot2)
library(knitr)

# Load dataset
books <- read.csv("books.csv")

# Step 1: Clean column names
books <- clean_names(books)
print(names(books))

# Step 2: Convert first_publish_date to Date
books$first_publish_date <- mdy(books$first_publish_date)
print(head(books$first_publish_date))

# Step 3: Create a year column
books$year <- year(books$first_publish_date)
print(head(books$year))

# Step 4: Filter books between 1990 and 2020
books <- books %>%
  filter(year >= 1990, year <= 2020)
print(unique(books$year))

# Step 5: Remove unwanted columns
books <- books %>%
  select(-c(publish_date, edition, characters, price, genres, setting, isbn))
print(names(books))

# Step 6: Keep books with fewer than 700 pages
books <- books %>%
  filter(pages < 700)
print(summary(books$pages))

# Step 7: Remove rows with NA values
books <- na.omit(books)
print(dim(books))

# Step 8: Glimpse the cleaned dataset
glimpse(books)

# Step 9: Summary statistics
print(summary(books))

# ---- Visualization Section ----

# Step 10: Histogram of Book Ratings
hist_rating <- ggplot(books, aes(x = rating)) +
  geom_histogram(binwidth = 0.25, fill = "skyblue", color = "darkblue") +
  labs(
    title = "Distribution of Book Ratings",
    x = "Rating",
    y = "Frequency"
  ) +
  theme_light()
print(hist_rating)

# Step 11: Box Plot of Page Counts
boxplot_pages <- ggplot(books, aes(x = pages)) +
  geom_boxplot(fill = "lightgreen", color = "darkgreen", outlier.shape = 18, outlier.color = "red") +
  coord_flip() +
  labs(
    title = "Box Plot of Pages in Books",
    x = "Pages"
  ) +
  theme_light()
print(boxplot_pages)

# Step 12: Total books by year
by_year <- books %>%
  group_by(year) %>%
  summarise(total_books = n(), .groups = 'drop')
kable(by_year)

# Step 13: Line plot of books by year
line_plot_years <- ggplot(by_year, aes(x = year, y = total_books)) +
  geom_line(color = "steelblue", size = 1) +
  geom_point(color = "red", size = 2) +
  labs(
    title = "Number of Books Rated Per Year",
    x = "Publication Year",
    y = "Total Books Rated"
  ) +
  theme_bw() +
  scale_x_continuous(breaks = seq(1990, 2020, 5)) +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))
print(line_plot_years)

# Step 14: Book publisher analysis
book_publisher <- books %>%
  group_by(publisher) %>%
  summarise(book_count = n(), .groups = 'drop')

print(book_publisher)

# Step 15: Filter publishers with >=125 books
book_publisher <- book_publisher %>%
  filter(book_count >= 125)
kable(book_publisher)

# Step 16: Sort publishers and add cumulative columns
book_publisher <- book_publisher %>%
  arrange(desc(book_count)) %>%
  mutate(
    cum_counts = cumsum(book_count),
    rel_freq = book_count / sum(book_count),
    cum_freq = cumsum(rel_freq),
    publisher = factor(publisher, levels = publisher)
  )
kable(book_publisher)

# Step 17: Pareto Chart of publishers
pareto_chart <- ggplot(book_publisher, aes(x = publisher, y = book_count)) +
  geom_bar(stat = "identity", fill = "plum", color = "black") +
  geom_line(aes(y = cum_counts / max(cum_counts) * max(book_count), group = 1),
            color = "darkred", size = 1) +
  geom_point(aes(y = cum_counts / max(cum_counts) * max(book_count)),
             color = "darkred", size = 2, shape = 17) +
  labs(
    title = "Book Publisher Distribution (1990 - 2020)",
    x = "Publisher",
    y = "Book Count"
  ) +
  theme_bw() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))
print(pareto_chart)

# Step 18: Additional Visualization - Relative Frequency Bar Chart
rel_freq_chart <- ggplot(book_publisher, aes(x = publisher, y = rel_freq)) +
  geom_col(fill = "coral") +
  labs(
    title = "Relative Frequency of Books by Publisher",
    x = "Publisher",
    y = "Relative Frequency"
  ) +
  theme_classic() +
  theme(axis.text.x = element_text(angle = 45, hjust = 1))
print(rel_freq_chart)

# Step 19: Additional Visualization - Pie Chart of Publisher Market Share
pie_chart_publishers <- ggplot(book_publisher, aes(x = "", y = rel_freq, fill = publisher)) +
  geom_bar(stat = "identity", width = 1, color = "white") +
  coord_polar(theta = "y") +
  labs(
    title = "Publisher Market Share (1990 - 2020)",
    x = NULL,
    y = NULL
  ) +
  theme_void() +
  theme(legend.title = element_text(size = 10), plot.title = element_text(hjust = 0.5))
print(pie_chart_publishers)

# ---- Table Section ----

# Table 1: Top 10 Years with Most Books Published
top_years <- by_year %>%
  arrange(desc(total_books)) %>%
  slice_head(n = 10)
kable(top_years)

# Table 2: Top 10 Publishers by Total Number of Books
top_publishers_total <- books %>%
  group_by(publisher) %>%
  summarise(total_books = n(), .groups = 'drop') %>%
  arrange(desc(total_books)) %>%
  slice_head(n = 10)
kable(top_publishers_total)

# Table 3: Top 10 Authors by Number of Books
top_authors <- books %>%
  group_by(author) %>%
  summarise(book_count = n(), .groups = 'drop') %>%
  arrange(desc(book_count)) %>%
  slice_head(n = 10)
kable(top_authors)

# Table 4: Top 10 Publishers by Average Rating
top_publishers_rating <- books %>%
  group_by(publisher) %>%
  summarise(avg_rating = mean(rating, na.rm = TRUE), .groups = 'drop') %>%
  arrange(desc(avg_rating)) %>%
  slice_head(n = 10)
kable(top_publishers_rating)