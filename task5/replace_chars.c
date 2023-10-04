#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "utility.h"

char* replace_chars(char *s) {
    size_t size_of_s = strlen(s);
    size_t max_length = size_of_s; // Start with the original length of the string
    for (size_t i = 0; i < size_of_s; i++) {
        if (s[i] == '&' || s[i] == '<' || s[i] == '>') {
            // Increment the max_length by the difference in length
            max_length += 4; // For "&amp;", "&lt;", or "&gt;"
        }
    }

    char *result = (char *)malloc((max_length + 1) * sizeof(char));
    size_t result_idx = 0;

    for (size_t i = 0; i < size_of_s; i++) {
        if (s[i] == '&') {
            strcat(result, "&amp;");
            result_idx += 5;
        } else if (s[i] == '<') {
            strcat(result, "&lt;");
            result_idx += 4;
        } else if (s[i] == '>') {
            strcat(result, "&gt;");
            result_idx += 4;
        } else {
            result[result_idx] = s[i];
            result[result_idx + 1] = '\0';
            result_idx++;
        }
    }

    return result;
}
