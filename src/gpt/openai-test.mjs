import OpenAI from "openai";
const openai = new OpenAI({
    apiKey: ""
});
async function main() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-4"
    });

    console.log(completion.choices[0]);
}

main();