# Discard

---

Discard is a mini-game where you choose between two random options from a list, repeating the process until all options have been evaluated. The goal is to end up with your personal favorite, within a scope you define.

The options are divided into six categories:

- Programming languages

- Linux distributions

- Development tools and miscellaneous

- Libraries and frameworks

- Large Language Models

- Important tech figures

My concept came from wanting ChatGPT to help me choose between two programming languages in the same way. When two options you really like face each other, the decision becomes hard—but that’s where the fun is.

 Programming languages and Linux distributions have more options than the other categories because they were the original focus of the idea. However, the other categories could be expanded and improved as well.


---

## Project Structure

---

`pool.json`: Here all options are stored in each category.

`sync-pool.sh`: This Bash script automates the process of update the option list. Just add images in `static/img` and run: `sync-pool.sh > pool.js`.

#### In `static/img`

There are name conventions:

- Setting the ID in option HTML elements as the name its category directory let reference the images directly for example.
- Images are named with its display name. For example: If you want an option be named "Ruby", set it "Ruby.png".


#### In `src/`

`components/`: Categories and options are repeated elements, so I isolated they with their own TypeScript class, custom HTML element and CSS style.

`css/`: All the styles splitted the page sections, and `mobile.css`, mainly size adjustments for mobile.

 ---

You can visit Discard here: https://francobujakiewicz.github.io/discard/
