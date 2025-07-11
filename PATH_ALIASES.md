# Path Aliases Configuration

This project uses TypeScript path aliases to simplify imports and improve code maintainability.

## Available Aliases

| Alias | Path | Description |
|-------|------|-------------|
| `@components/*` | `src/components/*` | UI components and reusable components |
| `@pages/*` | `src/pages/*` | Page components and route-specific components |
| `@lib/*` | `src/lib/*` | Utility functions, shared logic, and helper functions |
| `@public/*` | `public/*` | Static assets and public files |

## Usage Examples

### Before (relative imports)
```typescript
import Picture from "../../../components/ui/picture/picture.tsx"
import HomePage from "../../pages/home/home.tsx"
import { utils } from "../../lib/utils.ts"
```

### After (alias imports)
```typescript
import Picture from "@components/ui/picture/picture"
import HomePage from "@pages/home/home"
import { utils } from "@lib/utils"
```

## Configuration Files

### TypeScript Configuration (`tsconfig.app.json`)
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@components/*": ["src/components/*"],
      "@public/*": ["public/*"],
      "@pages/*": ["src/pages/*"],
      "@lib/*": ["src/lib/*"]
    }
  }
}
```

### Vite Configuration (`vite.config.ts`)
```typescript
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '@components': resolve(__dirname, './src/components'),
      '@public': resolve(__dirname, './public'),
      '@pages': resolve(__dirname, './src/pages'),
      '@lib': resolve(__dirname, './src/lib')
    }
  }
})
```

## Benefits

1. **Cleaner imports**: No more long relative paths with multiple `../`
2. **Better maintainability**: Moving files doesn't break imports
3. **Improved readability**: Clear indication of what type of module is being imported
4. **IDE support**: Better autocomplete and navigation in IDEs

## Notes

- The aliases work with both TypeScript and JavaScript files
- Vite handles the runtime resolution of these aliases
- TypeScript provides compile-time checking and IDE support
- Make sure to restart your development server after adding new aliases 