# File Structure

This is the frontend of the application. It is built with React and TypeScript. 
The files are organized as follows:

## COMPONENTS 

stores the components used in the application. 

The numbers define the section of the application they are used in. 
Numbers from 1 to 99 are used for the "Useful" part of the application, where the software content is stored.
Numbers starting from 999 are used for the "User" part of the application, where the user interface is stored. Here the user can modify settings and customise the software.
Numbers starting from 9999 are used for the "Authentication" part of the application, where the user login and settings are stored.

## INTERFACES

stores the interfaces used in the application. 

## REDUX

Used for the store and the reducers. Also contains a utils folder with functions used in the reducers.

## REUSABLES

stores the reusable components used in the application. Ideally we want to have as many components reusable as possible to make debugging and modifying the code easier, and eventually, exporting the components to be used in other applications.
