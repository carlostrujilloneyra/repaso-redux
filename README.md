# Recordando como usar Redux Toolkit con TS

Primero se realizará un ejercicio con Redux para acciones sincronas y posteriormente realizaremos un ejercicio con acciones asincronas.

## Acciones sincronas

1.  Lo primero es instalar mediante: `npm install @reduxjs/toolkit react-redux`
2.  Luego crear una carpeta "services" que contendrá a "store"
    o puedes crear de manera directa la carpeta "store".

3.  Store contendrá los siguientes archivos:

    - carpeta "slices" que contendrá otras carpetas dentro, ejem: counter, pokemons, users, etc, con
      sus respectivos archivos index.ts.

    - store.ts

    - hooks.ts

4.  Creas "slices" primero, donde estarán tus reducers que cada uno tiene su propio
    estado, es decir su propia información
5.  Ahora creas "store.ts", donde agregarás tus reducers para tener acceso a la información.
6.  Luego creas "hooks.ts", donde crearás tus hooks para acceder a los estados.
7.  Por último, creas la carpeta "slices" donde crearás tus reducers.
