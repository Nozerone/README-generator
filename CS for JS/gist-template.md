# A Regular Expression explained

A regular expression or Regex is a character sequence designed to match patters in strings or text. They are commongly used by search algorithms for find or find and replace operations or input validation using basic and special characters.

## Summary

Example code:

 `/^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/`

In this example the sequence is designed to search for HTML tags. HTML tags are used to define the structure and presentation of web content. They consist of two parts, an opening, and a closing tag. 


## Table of Contents

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [Grouping Constructs](#grouping-constructs)
- [Bracket Expressions](#bracket-expressions)
- [Character Classes](#character-classes)
- [The OR Operator](#the-or-operator)
- [Character Escapes](#character-escapes)

## Regex Components

### Anchors
The caret character, `^` matches the beggining of the string, or the beggining of a line. 
The dollar character `$` identifies the end of the search string. As you may already know HTML element tags openg with `<`, and close with `>`. This regular expression will search for alpha-numeric or special character combinations within.

### Quantifiers
In regex Quantifiers specify the number of instances of a character, group or character class that must be present in the input to be matched.
In our example /^<([a-z]`+`)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/ , the plus character specifies preceding characters, in this case lower case characters ranging from a through z, must be matched one or more times. 

The asterisk `*` maintains the search must match zero or more of the preceding token.

### Grouping Constructs
Grouping Constructs bind expressions together to evaluate information in a specific order. 


### Bracket Expressions
Bracket expressions are a way to match specific characters or ranges of characters. They are enclosed in square brackets [].
In the example regex `[a-z]` will match any single lower case character a through z, the following capturing group `[^<]` is a negated set, which will match any character that is not in the set.

### Character Classes
Character classes allow a regex to search for a match between a specific range.

`[A-Z]` in this case the hyphen between the two upper case characters creates a range in search criteria.
`\d` specifies the search for single digit characters from 0-9.
`\D` does the same for any character that is not a digit.
`\w` is a shorthand character class that matches any word character, which included a-z, A-Z, 0-9 and _ .
`\W` character class that matches any Non-word character, such as punctuation, whitespace, and special characters.

### The OR Operator
The OR oeprator is represented by `|` it is used to match one or several patterns. Acts as a boolean, matches the expression before or after pipe symbol.

### Character Escapes
Character escapes are a way to include special characters in your pattern that would otherwide be interpreted as part of the regex syntax. The backslash `\` is used as the escape character. Reserved characters that need to be included in your search should be preceded by a backslash to represent a literal character.

## Author

This gist was created by [Github](https://github.com/Nozerone)
