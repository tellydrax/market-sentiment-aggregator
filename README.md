# Market Sentiment & Data Aggregator

A microservices-based application that aggregates real-time market data, performs sentiment analysis on related news, and visualizes the insights on a dashboard.

## Architecture
- **Frontend**: React.js (Vite) for the real-time dashboard.
- **API Gateway**: Java (Spring Boot) handling authentication, rate limiting, and data serving.
- **Worker**: Python background service that scrapes data, runs sentiment analysis (NLTK/VADER), and updates the database.
- **Database**: PostgreSQL (planned)

## Current Status
- [x] Initial project structure defined
- [x] Spring Boot API scaffolding
- [x] React frontend initialization
- [ ] Implement Python worker for API polling
- [ ] Connect database
