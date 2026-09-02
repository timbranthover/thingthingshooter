# Architecture baseline

## Goal

Preserve optionality until the product brief is known while establishing engineering rules that scale beyond a demo.

## Boundaries

- `src/app`: delivery layer only. Routes, layouts, API route handlers, and composition.
- `src/platform`: product-agnostic capabilities such as configuration, observability, auth adapters, persistence adapters, feature flags, and shared infrastructure.
- `src/modules`: future product/domain modules. No product module exists until the domain is defined.

Dependency direction is one-way: `app -> modules -> platform`. Platform code never imports a product module.

## Data

Do not introduce a database or ORM until persistence requirements are known. When one is selected, application code should depend on repository interfaces or service boundaries rather than database client calls scattered through UI/routes.

## Identity and tenancy

Do not hard-code a tenancy model yet. Any future identity provider must resolve an application-level actor and authorization context before product modules consume it.

## Integrations

External services belong behind adapters. Environment variables are parsed centrally. Secrets never enter client bundles or source control.

## Quality gate

Every merge should pass lint, TypeScript, tests, and production build. CI is intentionally provider-light so Vercel preview deployments can remain the deployment path while GitHub validates source quality.

## Decision rule

Prefer reversible architecture. Do not add infrastructure merely because a mature company might eventually need it. Add a capability when the product requires it, but add it behind a stable boundary so replacing it later is cheap.
