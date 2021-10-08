import React from 'react';
import AppText from './AppText';

export default function ErrorMessage({error}) {
  return <AppText style={{color: 'red', marginBottom: 5}}>{error}</AppText>;
}
