import React from 'react';
import { CircularProgress, Typography } from '@mui/material';
import './LoadingSpinner.styles.scss';
import { useTranslation } from 'react-i18next';

const LoadingSpinner = () => {
  const { t } = useTranslation();
  return (
    <div className="loading-container">
      <div className="loading-content">
        <CircularProgress className="loading-spinner" />
        <Typography variant="h6" component="div">{t('loading')}</Typography>
      </div>
    </div>
  );
};

export default LoadingSpinner;
