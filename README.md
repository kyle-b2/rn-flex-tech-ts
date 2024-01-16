# Flex Technical Interview

1. Create a card component to display some information about a user, including id, email, name, and roles
2. Fetch a list of users from the API and display them in a list of cards
3. Add functionality to edit a user. You should be able to tap a user card and switch to an edit view for that user. It should have a back button to go back to the list view, and should have inputs to update name and email and shows the user's roles. It should have save and cancel that buttons. Saving should update the user in the API and upon success, switch back to the list view and update the list.

API endpoints:
URL: `https://interview-api.flexbase.workers.dev` \
Returns a list of user profiles: `GET /users` \
Edit user info (email and name): `PATCH /users/:id`

## User model

```
type User = {
  id: number;
  name: string;
  roles: string[];
  email: string;
};
```
