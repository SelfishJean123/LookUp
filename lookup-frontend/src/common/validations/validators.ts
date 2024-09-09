export const validateEmail = (email: string): string | null => {
    if (!email) {
        return "Email is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return "Invalid email format";
    }

    return null;
}

export const validateMessage = (message: string): string | null => {
    if (!message) {
        return "Message is required";
    }

    return null;
}

export const validateName = (name: string): string | null => {
    if (!name) {
        return "Name is required";
    }

    return null;
}