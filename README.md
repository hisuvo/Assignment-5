# Assignment-5

By using html, tailwind CSS, DaisyUi and JavaScript

### Design

1. **Navbar section** :

- It will be top sticky position
- Logo positioned in the middle.
- "Blog" button on the left.
- Account balance with a coin icon on the right.
- "Donation" and "History" buttons in the center of navigation.

  2.**Donation Cards** :

- Create 3 donation cards
- every crads will be two section left or right
- Image on the left.(right)
- Donation title.
- Donation info.
- Current donation amount.
- Input field for donation amount.
- Button for submitting the donation.
- History section initially hidden and empty.

### Functionalities

1. **Donation and History Button Functionality**:

- Clicking the "History" button will hide the donation data and display the history.
- Clicking the "Donation" button will hide the history and display the donation data.

2. **Donation Functionality for Each Card**:

- When the "Donate Now" button is clicked:
  - The donation input will be deducted from the total account balance, and the updated balance will be shown.
  - The card’s current donation amount will increase.
  - A meaningful notification will be added to the History section.

3. **Input Validation**:

- Show an alert if invalid data is found and stop the transaction.
- Validate the donation amount:
  - If the donation amount is greater than the account balance.
  - If the input field contains an invalid number.
  - If the input field is empty.

4. **History Section**:

- The history section will display transaction notifications, including:
  - Date and time of the transaction.
  - Donation amount.
  - Donation name.

### Challenges

1. **Sticky Navbar**:

- Make the navbar sticky to the top of the page.

2. **Blog Page**:

- Create a `blog.html` file and link it to the main page:
  - The blog page should contain 4 questions and their answers:
    1. What is the Document Object Model (DOM)?
    2. How do you select an element from the DOM?
    3. What is event delegation in the context of the DOM, and why is it useful?
    4. How do you manipulate an element's attributes and styles using the DOM?

3. **Toggle Active Status**:

- Toggle the active status of the "Donation" and "History" buttons:
- Change the button color to indicate when it's active.

4. **Static Modal**:

- Display a static modal instead of an alert on a successful donation.

5. **Reusable Functions**:

- Use at least 2 common functions.

6 **Responsive Design**:

- Ensure the application is responsive for different screen sizes.
