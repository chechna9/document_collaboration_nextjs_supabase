import React from 'react'
import styles from "@/components/liveblocks_init/Loading.module.css";

const loading = () => {
  return (
    <div className={styles.loading}>
    <img src="https://liveblocks.io/loading.svg" alt="Loading" />
  </div>
  )
}

export default loading