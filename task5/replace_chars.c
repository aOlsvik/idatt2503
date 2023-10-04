//
// Created by Aleksander Olsvik on 04.10.2023.
//

#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include "utility.h"

char* replace_chars(char *s) {
    // Calculate the size of the input string s
    size_t size_of_s = strlen(s);
    size_t max_length = size_of_s * (strlen("&amp;")-1) + 1;
    char *result = (char *) malloc(max_length * sizeof(char));
    result[0] = '\0';
    // characters to be replaced: &, <, > with &amp;, &lt;, &gt;
    // Write rest of function to replace characters and increase length of result
    for(size_t i = 0; i<size_of_s; i++){
        if(s[i] == '&'){
            strcat(result, "&amp;");
        } else if(s[i] == '<'){
            strcat(result, "&lt;");
        } else if(s[i] == '>'){
            strcat(result, "&gt;");
        } else {
            if (strlen(result) + 1 < max_length) {
                strncat(result, &s[i], 1);
            } else {
                // Handle the case where the buffer is full
                break;
            }
        }
    }
    free(result);

    return result;
}
