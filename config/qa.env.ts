export const qa = {
    baseURL: "https://demoqa.com/elements?utm_source=chatgpt.com"
};


// Without export → Only this file can use it. 🔒
// With export → Other files can import and use it. 🌍
//{} are used because qa is an object.


//export const baseURL = "https://demoqa.com"; --->You can, but objects become much more useful when you have multiple related settings.