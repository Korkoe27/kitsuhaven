# KitsuHaven

## Project Overview

KitsuHaven is a single-page web application built to allow anime enthusiasts to search for and explore detailed information about their favorite anime titles, a Haven for everything anime. Unlike streaming platforms, this application focuses on providing comprehensive details, including episode lists, synopses, genres, ratings, and more, using the Jikan API (a public API for MyAnimeList data). The project is built with modern web technologies to deliver a responsive, user-friendly, and visually appealing experience.

This application serves as a practice project for frontend development, emphasizing API integration, state management, and responsive UI design. It simulates a real-world development environment, offering experience in building and deploying a dynamic web application.

## Features

### Core Functionality

- **Search Anime**: Users can search for anime titles using a search bar, retrieving relevant results from the Jikan API.
- **Anime Details View**: Displays detailed information about a selected anime, including:
  - Title, release year, duration, and rating.
  - Synopsis and genres.
  - Episode list with filtering and search capabilities.
  - User ratings and interaction options (e.g., watchlist, share).
- **Responsive Design**: The UI is fully responsive, adapting to various screen sizes (desktop, tablet, mobile) using Tailwind CSS.
- **Error Handling**: Handles cases like invalid API responses, no search results, or network issues with user-friendly messages.

### Stretch Goals Implemented

- **Episode Filtering**: Users can filter episodes by range (e.g., episodes 1-20, 21-40) or search for specific episodes by ID or title.
- **Interactive UI**: Includes buttons for adding to a watchlist, sharing, and viewing trailers (placeholder functionality).
- **Custom Scrollbar**: Styled scrollbars for episode lists to enhance the visual experience.

## Technologies Used

- **React**: For building reusable UI components and managing the application’s front end.
- **Tailwind CSS**: For responsive and modern styling with a utility-first approach.
- **Zustand**: For lightweight and efficient state management.
- **Axios**: For making HTTP requests to the Jikan API.
- **React Router**: For client-side routing to navigate between the dashboard and anime details pages.
- **Jikan API**: A free, public API providing access to MyAnimeList’s anime database.

## Project Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or Yarn
- A Jikan API key (optional, as the Jikan API does not require authentication for basic usage)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Korkoe27/kitsuhaven
   cd kitsuhaven
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173` (or another port if configured differently).

### Configuration

- **Jikan API**: The application uses the Jikan API (`https://api.jikan.moe/v4/`) to fetch anime data. No API key is required, but ensure your usage complies with the API’s rate limits.
- **Tailwind CSS**: Tailwind is pre-configured in the project. Customize the `tailwind.config.js` file if you need to modify themes or add custom styles.
- **Zustand**: State management is handled via Zustand. The store is set up to manage search results, anime details, and user interactions.

## Project Structure

```
kitsuhaven/
├── public/
│   ├── images/
│   │   └── index-bg.jpg    # Background image for the dashboard
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx    # Main landing page with search bar
│   │   ├── AnimeDetails.jsx # Detailed anime view with episode list
│   ├── store/
│   │   └── animeStore.js    # Zustand store for state management
│   ├── App.jsx              # Main app component with routing
│   ├── index.css            # Global styles with Tailwind CSS
│   └── main.jsx             # Entry point for React
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.js           # Vite configuration
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation
```

## Usage

1. **Landing Page (Dashboard)**:

   - The landing page features a search bar where users can type anime titles.
   - A gradient-styled "Explore Anime" button navigates to a home page or anime list (based on routing).
   - Popular genres are displayed as top searches for inspiration.

2. **Anime Details Page**:
   - Displays detailed information about a selected anime, including a poster, synopsis, genres, and episode list.
   - Users can filter episodes by range or search for specific episodes.
   - Interactive buttons allow users to add the anime to a watchlist, share it, or view a trailer (placeholder functionality).
   - A breadcrumb navigation helps users return to the home page or anime list.

3. **State Management**:
   - Zustand manages the application state, including search results, selected anime, and episode filters.
   - Axios handles API requests to fetch anime data from the Jikan API.

## Deployment

The application is deployed on [[KitsuHaven](https://kitsuhaven.vercel.app/)]. To deploy your own version:

1. Push the project to a GitHub repository.
2. Connect the repository to Vercel or Netlify.
3. Configure environment variables (if any) in the hosting platform’s dashboard.
4. Deploy the application and access it via the provided URL.

## Future Improvements

<!-- - **Favorites List**: Implement local storage to allow users to save favorite anime titles. -->
- **Pagination**: Add pagination for search results and episode lists to handle large datasets.
- **Sorting and Filtering**: Enable sorting by release date, rating, or popularity and filtering by genre or year.
- **Trailer Integration**: Fetch and display YouTube trailers using a video API.
- **Theme Customization**: Add light/dark mode toggle for enhanced user experience.
<!-- - **Internationalization**: Support multiple languages for anime details and UI. -->

## Known Limitations

- The Jikan API has rate limits, which may affect performance during heavy usage.
- Trailer and watchlist functionalities are currently placeholders and require integration with additional APIs or local storage.
- The application uses sample data for some components (e.g., episode descriptions), which should be replaced with real API data.

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -m "Add your feature"`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Acknowledgments

- **Jikan API**: For providing free access to MyAnimeList’s anime data.
- **Tailwind CSS**: For enabling rapid and responsive UI development.
- **React and Zustand**: For powering the frontend and state management.
