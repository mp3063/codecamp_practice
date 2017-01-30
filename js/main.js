// Convert the characters &, <, >, " (double quote), and ' (apostrophe),
// in a string to their corresponding HTML entities.
// Remember to use Read-Search-Ask if you get stuck.
// Try to pair program. Write your own code.
//   ' = &apos;
function convertHTML(str)
{
    return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                      .replace(/'/g, '&apos;').replace(/"/g, '&​quot;');
}
console.log(convertHTML('Stuff in "quotation marks"'));