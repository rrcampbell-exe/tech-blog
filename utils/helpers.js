module.exports = {
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }

    return word;
  },
  format_post_content: (content) => {
    if (content.length < 70) {
      return content;
    } else {
      return content.substring(0, 70) + "...";
    }
  },
};
