import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import RootRoute from './routes/RootRoute';
import AuthProvider from './Providers/AuthProviders';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<AuthProvider>
			<RootRoute />
			<Toaster position="top-right" reverseOrder={false} />
		</AuthProvider>
	</StrictMode>
);
