## Next.js Country Info App

This project is a web application built with Next.js that displays information about countries using the REST Countries API. It features a responsive design with TailwindCSS, state management through Context API, and unit/integration testing using Jest and React Testing Library.

## Running the Project Locally

To run this project on your local machine, follow these steps:

### Prerequisites

Node.js (version 12 or later)
npm (version 6 or later)

### Installation

Clone the repository

```bash
git clone https://github.com/your-username/your-repository-name.git
cd countries-dasboard
```

### Install dependencies

```bash
npm install

```

### Run the development server

```bash
npm run dev

```

Open `http://localhost:3000` with your browser to see the result.

### Testing

To run the unit and integration tests:

```bash
npm test
```

## Design Choices

Framework and Styling

*Next.js:* Chosen for its ease of creating server-rendered React applications, automatic code splitting, and simple page-based routing. It also simplifies deploying the application.

*TailwindCSS:* Utilized for its utility-first approach, which greatly accelerates the development process and ensures a responsive design without much hassle.

## State Management

Context API: Selected for its simplicity and suitability for a project of this scale. It provides a straightforward way to manage global state like the list of countries and the search query without adding extra libraries like Redux, making the project lighter and more maintainable.

## API Integration

REST Countries API: Provides comprehensive data about countries in a simple, easy-to-use format. This project uses this API to fetch countries' data, including names, populations, areas, and flags.

## Testing

Jest and React Testing Library: These tools are used for writing unit and integration tests due to their powerful and easy-to-use testing capabilities, which are well-integrated with React.

## Challenges Faced

*API Rate Limiting:* Encountered challenges with the REST Countries API rate limiting during development. This was mitigated by implementing efficient fetching strategies and using mock data for testing.

*Responsive Design:* Ensuring the application was fully responsive across all devices required meticulous design with TailwindCSS. Utilizing its breakpoints and utility classes helped overcome this challenge.

*State Management:* Managing global state for search functionality and API data posed a challenge. This was addressed by using the Context API, which simplified state management across components.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any improvements or bug fixes.Design Choices



