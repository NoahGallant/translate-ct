# Translate

Translate is an open source programming environment to designed to teach **computational thinking**. It is written in Javascript and built on [Electron] to be cross-platform and hackable.

### Concept
  - The concept behind **Translate** is to use real-world examples in order to change discrete processes and algorithms to computational thinking in a programming setting.

### How Translate came to be...

 - The idea for Translate came from the idea to teach algorithms and computational thinking before/concurrently as adolescents begin to learn to program.
 - The Translate project was a result of a human-centered design experiment conducted at [Columbia] by the [Design for America] team there.
 - The team wanted to find a simple way to computational thinking through ideas that kids [Grade 4-8] might already understand. Here is a research article on the difficulty, but importance of such a task: [ResearchGate].
 - The idea then came that ideas in cooking, like recipes and processes, could easily by *translated* in pseudo-code... and so arised **Translate**.
 - Translate acts as a medium for encoding physical processes.

### How it works

 - The most success in using this program has been found in having an instructor on-site with the kids, taking them through the process physically and writing the code with them.
 - The instructor then asks the kids to perform several tasks such as changing the variable names, the size of the product, and the order of declarations.
 - Here is a full example:

Written by instructor:
```
avos = 2 avocado
toms = 2 tomato
lis = 2 lime
oni = 1 onion

mashedAvocados = mash avos with spoon
dicedTomatoes = chop toms with knife
choppedOnions = chop oni with knife
squeezedLimes = squeeze lis with hand
guacamole = mix mashedAvocados, dicedTomatoes, choppedOnions, squeezedLimes with spoon

present(guacamole)
```

This is the general syntax used. Behind-the-scenes the program generates a JSON Object corresponding to the code written. Once this file is saved in Translate with the Description and the Name filled out, it can be opened from Translate.

The instructor may then take the student through the declarations, showing them 2 avocados and writing the line:
```
avos = 2 avocados
```

One way to communicate functions is to produce a physical box once each material is declared. The box acts as a "function box." Given the material, and the function performed, the student can select from a knife, a hand, or a spoon to put on top of the box, and then pass through the material. Say they choose to mash the avocados with a spoon, they place the spoon on the function box, pass the avocado through, and recieve mashed avocados. In turn, the following code is produced:
```
mashedAvocados = mash avos with spoon
```

Once the final product is produced, you present it:
```
present(guacamole)
```

### Computational Thinking
As this project was approached we looked at modern day programming languages and computing to see which aspects of computer science we wanted to include in the functionality and learning process of Translate. Most college/high school students are using languages like Java, C++ and Swift for programming, and Python and similar languages for scripting. As there are such a variety of syntax and functionality differences in these languages, we tried to discern what the base model for writing an algorithm in any of these languages would be.

##### Variables / References
 - For variables and references we initially wanted to take an object reference approach, where we tried to discretely communicate the idea of using object references. It became easy to see that this was not only complicated and convoluted, but not essential to teaching computational thinking as a whole.
 - We ultimately wanted to communicate naming how variables are given names, how those variables are then refered to, and how those variables can be declared in different, dynamic ways.
 ```
 avos = 2 avocado
 ```
 - The `avos` variable then becomes the reference name, with `avocado` being the type and `2` as an initialization parameter.

##### Functions
- The functions in the Translate "language" initially had syntax of ```mash(avos)```. It became apparent in prototyping that the parenthesis and the syntax is not as intuitive, so we altered the language to make the programming more intuitive.
```
mashedAvocados = mash avos with spoon
```
- Here is an example of dynamic variable declaration, and an inlined-function. As you can see the function takes the form ```function_name parameter_name with tool_or_option```. The idea here is to implicitly teach function return-values, and to begin to even introduce the idea of library functions, where given the activity there are certain operations that exist.

##### Options / Keywords
 - Within computational thinking there are certainly set constants and ideas that act as translators for algorithmic processes.
```
guacamole = mix mashedAvocados, dicedTomatoes, choppedOnions, squeezedLimes with spoon

present(guacamole)
```
- We again see here the idea of the `with` keyword, but also the option to use `,` to list out multiple variables in our function. The `spoon` is never declared in our code and thus acts as an option-parameter. This is easily translated into ideas of passing parameters into functions in higher level programming to dictate how the function operates.
- Finally, ```present``` establishes a precedent of using functions like ```return``` or ```exit``` in various languages to end our programs, or returning values.

### Media

![Function Box](https://raw.githubusercontent.com/translate-ct/case-study-media/function-box.JPG)
![Function Box](https://raw.githubusercontent.com/translate-ct/case-study-media/function-box.JPG)
![Function Box](https://raw.githubusercontent.com/translate-ct/case-study-media/function-box.JPG)
![Function Box](https://raw.githubusercontent.com/translate-ct/case-study-media/function-box.JPG)

### Version
0.1.0

### Tech

Translate uses a number of open source projects to work properly:

* [PhotonKit] - great front-end framework for Electron
* [node.js] - evented I/O for the backend
* [Electron] - fast node.js network app framework
* [Behave.js] - key-binding for IDE
* [jQuery] - Front-end Electron components


### Installation

To run go to ``translate/dist/Translate.app``

### Systems

Translate works on the following platforms

* Web [Designed for Chromium]
* OS X
* Windows
* Linux

### Todos

 - Add loops
 - Improve IDE
 - Add syntax highlighting
 - Clean code

License
----

MIT

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [photonkit]: <https://photonkit.com>
   [node.js]: <http://nodejs.org>
   [Behave.js]: <https://github.com/jakiestfu/Behave.js>
   [jQuery]: <http://jquery.com>
   [Electron]: <http://electron.atom.io>
   [Columbia]: <http://columbia.edu>
   [Design for America]: <http://bcdfa.com>
   [ResearchGate]: <https://www.researchgate.net/profile/Valerie_Barr/publication/247924673_Bringing_computational_thinking_to_K-12_what_is_Involved_and_what_is_the_role_of_the_computer_science_education_community/links/53e2e8b40cf2b9d0d832c294.pdf>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]:  <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
