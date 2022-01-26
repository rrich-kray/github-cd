# consider making study groups, meeting out of class

## Always focus on the concepts

There are many conceptual similarities among programming languages. Much of what you do in JavaScript will be transferable to other languages

So focus on concepts

# Arrow functions

Have a different scope. the "This" keyword does not reference the function in which it is located

Using arrow functions is a matter of preference. However, the industry is moving towards arrow functions

# When you're writing a method to an object, NEVER USE AN ARROW FUNCTION. The 'This'  keyword will refer to the window/console/node object, depending on where your running JavaScript, rather than the method in which 'this' is contained

# installing node packages

npm init will create a packages.lock.json, which contains the versions of all your project's dependencies. This "locks in" the versions of these node packages so that updates won't break your code. Never modify this file. 

When it comes to NPM packages, NPM(?) is your friend.

You can get an idea of how good a package is by how good its documentation is. # of downloads is also a good indicator

# Git Guide

You may want to try to contribute to an open source project for practice

If you want to make a suggested code update, you need to fork.

Fork will duplicate the repository in your account, and then you can make a pull request to the owner of the repository to merge your code into the project

## Functional loops

.map() and .filter(). You'll get alot a practice with these moving forward and will likely use these often in your career.

you may never use .reduce(), but there are some very good use cases for it.

# Destructuring 

Use it very often, especially with React

Deeply nested object destructuring - not very often

With object destructuring, we are looking up a property name in an object.

With array destructuring, we are assigning names to the values we destructure. 