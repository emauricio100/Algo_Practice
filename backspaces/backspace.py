#Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

#Your task is to process a string with "#" symbols.

#Examples

#"abc#d##c"      ==>  "ac"
#"abc##d######"  ==>  ""
#"#######"       ==>  ""
#"" 
def clean_string(s):
    string = ''
    for i, letter in enumerate(s):
        if letter == '#':
            string = string[:-1]
        else:
            string += letter
    return string