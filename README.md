# Danx Icons

Danx Icons is an open-source npm package that provides a large set of free SVG icons from popular icon libraries such as Font Awesome and Heroicons. This package aims to make it easy for developers to access and use high-quality icons in their projects without the need for separate installations or licensing.

## Installation

To install Danx Icons, use the following command:

```bash
yarn add danx-icons
```

## Usage

To use an icon from Danx Icons, simply import the desired icon from the package and include it in your JSX or HTML:

```jsx
import { FaUser } from 'danx-icons';

function MyComponent() {
  return (
    <div>
      <FaUser />
      <p>User Profile</p>
    </div>
  );
}
```

The imported icon will be an inline SVG element that you can style and manipulate as needed.

## Icon Sources and Licensing

Danx Icons includes icons from the following open-source icon libraries:

- [Font Awesome](https://fontawesome.com/) (Free icons) - [License](https://fontawesome.com/license/free)
- [Heroicons](https://heroicons.com/) - [License](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE)

Please note that while Danx Icons is free to use, each icon library may have its own licensing terms. Make sure to review and comply with the respective licenses of the icon libraries you use.

## Contributing

Contributions to Danx Icons are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue on the [GitHub repository](https://github.com/yourusername/danx-icons).

If you would like to contribute icons or improvements to the package, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure that the icons are properly organized in the `src` directory.
4. Update the README.md file if necessary.
5. Submit a pull request describing your changes.

## License

Danx Icons is released under the [MIT License](https://opensource.org/licenses/MIT). You are free to use, modify, and distribute this package in accordance with the terms of the license.

However, please note that the individual icons within this package may have their own licensing terms. Please refer to the license files of the respective icon libraries for more information.

## Acknowledgements

Danx Icons would not be possible without the incredible work of the icon library authors and contributors. We express our gratitude to the teams behind Font Awesome, Heroicons, and other icon libraries included in this package.

## Disclaimer

Danx Icons is not affiliated with or endorsed by any of the icon libraries included in this package. The package maintainer is not responsible for any changes, updates, or issues related to the original icon libraries.
