#include <string.h>
#include <stdlib.h>
#include "utility.h"

char* replace_chars(char *input) {
    size_t initial_len = strlen(input);
    size_t new_len = initial_len;
    for (size_t i = 0; i < initial_len; ++i) {
        if (input[i] == '&') new_len += 4;
        else if (input[i] == '<' || input[i] == '>') new_len += 3;
    }
    char *output = malloc(new_len + 1);
    if (output == NULL) return NULL;

    size_t pos = 0;
    for (size_t i = 0; i < strlen(input); i++) {
        if (input[i] == '&') {
            strcpy(output + pos, "&amp;");
            pos += 5;
        } else if (input[i] == '<') {
            strcpy(output + pos, "&lt;");
            pos += 4;
        } else if(input[i] == '>') {
            strcpy(output + pos, "&gt;");
            pos += 4;
        } else {
            output[pos++]=input[i];
        }
    }

    output[pos] = '\0';
    return output;
}