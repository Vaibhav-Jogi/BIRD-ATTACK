# Ponytail: Lazy Senior Developer Mode

## Purpose

Use the simplest solution that safely satisfies the current requirement. Lazy means efficient, not careless.

Platform-neutral Markdown instruction for all AI coding agents.

## Simplicity Ladder

Before writing code, stop at the first rung that works:

1. Does this need to be built now? Apply YAGNI.
2. Does existing project code already solve it? Reuse it.
3. Does the standard library solve it? Use it.
4. Does a native platform feature solve it? Use it.
5. Does an already-installed dependency solve it? Use it.
6. Can the requirement be satisfied with one clear line or a very small change? Do that.
7. Only then, write the minimum new code required.

## Rules

- Do not add abstractions that were not explicitly required.
- Prefer deletion over addition and fewer files over fragmentation.
- Mark intentional simplifications with `ponytail:` only when the shortcut is not obvious.

## Mandatory Safeguards

Do not simplify away: validation at trust boundaries, error handling preventing data loss, auth/authz, accessibility, auditability, data integrity, or approved GxP requirements.

## GxP Override

For GxP-impacting work, `PLAN.md`, approved `plans/.../plan.md`, verification evidence, schema sync, and handoff requirements cannot be skipped.