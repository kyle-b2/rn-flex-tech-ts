# Flex Technical Interview

1. Create a card component to display some information about a user, including id, email, name, and roles
2. Fetch a list of users from the API and display them in a list of cards
3. Add an Edit button to the cards, which will switch the card into an "Edit State" that allows users to update the email, name, and roles. This "Edit State" will have Save and Cancel buttons to either save the data to the API or cancel the edit action.
4. Add a button to the cards that says "Select User". Create a header that says "<User> has been selected", where user corresponds to the id of a user card that has been "selected" with the button. This functionality has no impact to the edit functionality.

API endpoints:
URL: `https://interview-api.flexbase.workers.dev` \
Returns a list of user profiles: `GET /users` \
Edit user info (email and name): `PATCH /users/:id`

## User model

```
type User = {
  id: string;
  name: string;
  roles: string[];
  email: string;
};
```
