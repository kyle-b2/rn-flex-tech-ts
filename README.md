# Flex Technical Interview

1. Fetch a list of users from the API and display them in a list of cards
   - The card component should show the user's id, email, name, and roles
2. Add functionality to edit a user's information (name and email).
   - Tapping a card should open an edit view in a new screen or drawer
   - Edit view should have text inputs for editing name and email, and also display id and roles
   - Edit view should have save and cancel buttons. Pressing the save button should update the user in the API and on success, navigate back to the list view and update the list. Cancelling should clear any changes and navigate back to the list view.
3. Bonus: Add a swipe to refresh on the user list

## API
Base URL: `https://interview-api.flexbase.workers.dev` \
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
