# Clean Architecture Overview

## Introduction
This document provides an overview of Clean Architecture, a software design philosophy emphasizing separation of concerns and maintainability. Clean Architecture consists of four layers, each with its own responsibilities:

1. **Domain Layer / Enterprise / Entities** - Innermost layer containing business entities.
2. **Application Layer / Use Case** - Layer for application-specific business rules and use cases.
3. **Presentation Layer / Adapter / Controller** - Layer responsible for handling input and output interactions.
4. **Infrastructure Layer** - Outermost layer dealing with external concerns such as databases and UI frameworks.

For more in-depth understanding, refer to this [beginner's guide](https://betterprogramming.pub/the-clean-architecture-beginners-guide-e4b7058c1165).

## SOLID Principles
Clean Architecture adheres to SOLID principles, a set of object-oriented design principles aimed at creating more maintainable and scalable software solutions:

- **S - Single Responsibility Principle (SRP):** Classes should have only one responsibility or job.
- **O - Open/Closed Principle (OCP):** Software entities should be open for extension but closed for modification.
- **L - Liskov Substitution Principle (LSP):** Subtypes should be substitutable for their supertypes without altering program functionality.
- **I - Interface Segregation Principle (ISP):** Clients should not be forced to depend on interfaces they do not use.
- **D - Dependency Inversion Principle (DIP):** High-level modules should depend on abstractions, not on concrete implementations.

For detailed explanations and examples of SOLID principles in different programming languages, refer to the following resources:
- [SOLID in OOPs (Java)](https://dev.to/iamrule/solid-principles-explained-28da)
- [SOLID in JavaScript](https://www.calibraint.com/blog/solid-principles-in-javascript)
