# Amy's Chemistry Experiments

Static website for Amy's chemistry experiments.

## Publish With GitHub Pages

1. Create a public GitHub repository.
2. Push this folder to the repository's `main` branch.
3. In GitHub, open `Settings` > `Pages`.
4. Set the source to `Deploy from a branch`, then select `main` and `/root`.
5. Under `Custom domain`, use:

   ```text
   amyschemistryexperiments.com
   ```

The `CNAME` file in this folder is already set up for that custom domain.

## Domain DNS

At the domain registrar, point the apex domain to GitHub Pages:

```text
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
```

For the `www` version, add a CNAME record after you know your GitHub username:

```text
CNAME    www    YOUR-GITHUB-USERNAME.github.io
```

DNS changes can take time to update. After GitHub detects the domain, enable `Enforce HTTPS` in the Pages settings.
