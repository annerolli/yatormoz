import clsx from 'clsx';
import './IconButton.css';

/**
 * mode: "primary" | "secondary"
 * size: "s" | "m" | "l"
 */
export function IconButton({ mode = 'primary', size = 's', className, ...props }) {
    return (
        <button
            {...props}
            type="button"
            className={clsx(className, `IconButton IconButton--m-${mode} IconButton--s-${size}`)}
        />
    );
}