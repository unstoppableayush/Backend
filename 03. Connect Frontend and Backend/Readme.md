# Connect frontend and backend | Proxy and CORS

- Two types to import files
    1. CommonJS - require (sync)
    2. ModuleJS - import (async)

- Rename the terminal name and changed the color
- Used axios library
- Used CORS (Cross origin resource sharing)
- Used proxy
    - ```react
            export default defineConfig({
            server:{
                proxy: {
                '/api' :'http://localhost:3000'
                },
            },
            plugins: [react()],
            })
     ```
- append the url `http://localhost:3000` before `/api` whenever server get url start  from `/api`

- Bad practice to used frontend dist folder in backend .