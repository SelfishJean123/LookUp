# LookUp

## Opis Projektu

Ten projekt jest aplikacją internetową, stworzoną w celu utworzenia katalogu produktów kosmetycznych. Aplikacja składa się z dwóch głównych części: backendu i frontendu.

### Backend

Backend aplikacji został napisany w języku Python z wykorzystaniem frameworka Django i Django REST framework. Wykorzystuje także JWT Token do uwierzytelniania użytkowników. Istnieje również dokumentacja API wygenerowana przy użyciu Swaggera.

### Frontend

Frontend aplikacji został napisany w języku JavaScript z wykorzystaniem biblioteki ReactJS. Wykorzystuje wiele narzędzi i technologii, takich jak Bootstrap, Bootswatch, Heroicons, TypeScript, SASS i Axios, w celu stworzenia interfejsu użytkownika.

## Baza Danych

Baza danych dla projektu została opracowana przy użyciu narzędzia drawSQL.app. Baza danych przechowuje informacje o produktach kosmetycznych, takie jak skład, zastosowanie, sposób użycia, czy produkt jest cruelty-free oraz średnia ocena (max 5 gwiazdek).

## Funkcje Aplikacji

Aplikacja umożliwia użytkownikom:
- Przeglądanie listy produktów kosmetycznych.
- Przejście do szczegółów wybranego produktu.
- Wyświetlenie informacji o składzie, zastosowaniu, sposobie użycia, czy produkcie jest cruelty-free oraz średniej ocenie.
- Zalogowani użytkownicy mogą dodawać opinie w postaci gwiazdek do produktów.

## Instalacja i Uruchomienie

Aby uruchomić projekt lokalnie, wykonaj następujące kroki:

### Backend (Django)

1. Przejdź do katalogu backend.
2. Uruchom serwer Django: `python manage.py runserver`.
4. Możesz otworzyć serwer w przeglądarce pod adresem http://localhost:8000/

### Frontend (ReactJS)

1. Przejdź do katalogu frontend.
2. Zainstaluj zależności za pomocą komendy: `npm install`.
3. Uruchom frontend: `npm start`.
4. Otwórz aplikacje pod adresem http://localhost:3000/

## Dokumentacja

Dokumentacja API jest dostępna pod adresem `/swagger/` po uruchomieniu serwera backendowego. Możesz również znaleźć ją w pliku `backend/swagger.yml`.

## Autorzy

Ten projekt został stworzony przez Joannę Hornung.

## Licencja

Ten projekt jest udostępniany na licencji Creative Commons.
