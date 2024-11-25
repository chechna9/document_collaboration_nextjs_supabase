# Document Management System with Liveblocks, Blocknote, and Supabase

This project is a collaborative document management system built using **Liveblocks** for real-time collaboration, **Blocknote** as a rich-text editor, and **Supabase** for backend services, including authentication and database storage.

---

# Project Architecture

## Folder Structure

### **Root**
- **`globals.css`**: Global styles for the application.
- **`liveblocks.config.ts`**: Configuration for Liveblocks integration.
- **`middleware.ts`**: Middleware handling authentication and routing.

---

### **App Directory**
The main directory for routing and pages, structured by feature areas.

#### **`/app`**
- **`layout.tsx`**: The root layout for all pages.
- **`loading.tsx`**: A global loading spinner.
- **`page.tsx`**: The root landing page of the application.

#### **Authentication**
- **`/app/(authentication)`**: Contains login and signup flows.
  - **`actions.ts`**: Shared server actions for authentication.
  - **`layout.tsx`**: Layout for authentication pages.
  - **`loading.tsx`**: Loading spinner for authentication-related routes.
  - **`/login`**
    - **`page.tsx`**: Login page.
    - **`/components/login_form.tsx`**: Login form UI component.
  - **`/signup`**
    - **`page.tsx`**: Signup page.
    - **`/components/signup_form.tsx`**: Signup form UI component.

#### **Documents**
- **`/app/documents`**: Handles document management.
  - **`layout.tsx`**: Layout for documents-related pages.
  - **`loading.tsx`**: Loading spinner for documents routes.
  - **`page.tsx`**: Displays the list of user documents.
  - **`/components/navbar.tsx`**: A navigation bar for the documents section.
  - **`/[id]/page.tsx`**: A dynamic route to edit or view a specific document.

#### **Editor**
- **`/app/editor`**
  - **`Providers.tsx`**: Providers for the editor, including collaborative features.
  - **`Room.tsx`**: Main editor interface for creating and editing documents collaboratively.

#### **API**
- **`/app/api`**: API routes for the application.
  - **`/auth/confirm/route.ts`**: Handles email confirmation for authentication.
  - **`/liveblocks-auth/route.ts`**: Endpoint for Liveblocks authentication.

---

### **Components**
Shared UI components for styling and functionality.

- **`/components`**
  - **`/liveblocks_init`**: Components for the collaborative editor.
    - **`Avatars.tsx`**: Displays user avatars.
    - **`CollaborativeEditor.tsx`**: The main collaborative editor component.
    - **`Toolbar.tsx`**: Toolbar for editing options.
  - **`/ui`**: Generic reusable UI components.
    - **`button.tsx`**: Styled button.
    - **`form.tsx`**: Form wrapper component.
    - **`input.tsx`**: Styled input field.
    - **`label.tsx`**: Styled label.

---

### **Lib**
Utility and library code.

- **`/lib`**
  - **`utils.ts`**: General utility functions.
  - **`/supabase`**: Supabase integration files.
    - **`client.ts`**: Supabase client initialization.
    - **`middleware.ts`**: Middleware for handling Supabase-specific logic.
    - **`server.ts`**: Server utilities for Supabase operations.
    - **`supabaseStorage.ts`**: Utilities for file storage using Supabase.
    - **`/actions`**
      - **`documentActions.ts`**: Actions for managing documents in Supabase.
      - **`profileActions.ts`**: Actions for managing user profiles in Supabase.

---

### **Services**
API integrations and business logic.

- **`/services`**
  - **`authApi.ts`**: API for handling authentication and user sessions.

---

### **Stores**
State management for the application.

- **`/stores`**
  - **`authStore.ts`**: Zustand store for managing user authentication state.

---

## Points to Add
1. **Document Ownership**: Ensure each document in Supabase is tied to the user who created it.
2. **Authorization**: Add checks to ensure only authorized users can edit or view specific documents.
3. **Collaborative Editing**: Store and manage collaborative permissions for documents in Supabase, allowing multiple users to edit.
4. **Real-Time Updates**: Enhance the editor to leverage Liveblocks for real-time updates with Supabase persistence.
5. **Testing**: Add tests for key components and features to ensure reliability.
6. **Styling**: Apply consistent UI styles across all components.

