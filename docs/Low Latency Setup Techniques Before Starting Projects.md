# 12 Golden Rules for Low Latency Every System Design Engineer MUST Know

1.  ## Use Database Indexes to Reduce Access Time
    
    Database queries are often the primary bottleneck in application performance. Without proper indexing, databases perform full table scans that scale linearly with data size.
    
    ```
    
    // Without index: O(n) lookup
    // With index: O(log n) lookup
    
    type User struct {
        ID        int    `gorm:"primaryKey"`
        Email     string `gorm:"index"` // Indexed field
        Username  string `gorm:"uniqueIndex"`
        CreatedAt time.Time
    }
    
    // Query performance comparison
    // No index: 2000ms for 1M records
    // With index: 15ms for 1M records
            
    ```
    
    Benchmark: In production systems, adding a B-tree index on frequently queried columns can reduce query time from seconds to milliseconds for tables with millions of rows.
    
2.  ## Compress the Payload to Reduce Data Transfer Time
    
    Network bandwidth is finite. Compressing data before transmission reduces both transfer time and bandwidth costs.
    
    ```
    import (
        "compress/gzip"
        "bytes"
    )
    
    func compressPayload(data []byte) ([]byte, error) {
        var buf bytes.Buffer
        writer := gzip.NewWriter(&buf)
        
        if _, err := writer.Write(data); err != nil {
            return nil, err
        }
        writer.Close()
        
        return buf.Bytes(), nil
    }
    
    // Benchmark: 100KB JSON payload
    // Uncompressed: 100KB, 200ms transfer
    // Gzip compressed: 15KB, 30ms transfer
    // Compression ratio: 85% reduction
            
    ```
    
3.  ## Use CDN to Keep Data Closer to Users
    
    Content Delivery Networks cache static assets at edge locations worldwide, dramatically reducing round-trip time for geographically distributed users.
    
    ```
    type CDNConfig struct {
        Provider     string
        CacheTTL     time.Duration
        EdgeLocations []string
    }
    
    // Latency comparison:
    // Origin server (US-East): 250ms for EU users
    // CDN edge (EU): 15ms for EU users
    // Improvement: 94% reduction
            
    ```
    
4.  ## Group Requests to Reduce Network Overhead
    
    Multiple small requests create overhead from TCP handshakes, headers, and round-trips. Batching reduces this overhead significantly.
    
    ```
    type BatchRequest struct {
        Operations []Operation
        MaxSize    int
        Timeout    time.Duration
    }
    
    func (b *BatchRequest) Execute() []Result {
        batch := make([]Operation, 0, b.MaxSize)
        
        for _, op := range b.Operations {
            batch = append(batch, op)
            if len(batch) >= b.MaxSize {
                return processBatch(batch)
            }
        }
        return processBatch(batch)
    }
    
    // Performance: 1000 individual requests: 5000ms
    // 10 batched requests (100 each): 500ms
            
    ```
    
5.  ## Use HTTP/2 for Parallel Multiplexing
    
    HTTP/2 allows multiple requests over a single TCP connection, eliminating the overhead of establishing multiple connections.
    
    ```
    import "golang.org/x/net/http2"
    
    server := &http.Server{
        Addr: ":8443",
    }
    http2.ConfigureServer(server, &http2.Server{})
    
    // HTTP/1.1: 6 parallel connections, head-of-line blocking
    // HTTP/2: Single connection, unlimited streams
    // Latency reduction: 40-60% for asset-heavy pages
            
    ```
    
6.  ## Reduce External Dependencies
    
    Each external service call adds latency and potential failure points. Minimize dependencies or consolidate them.
    
    ```
    // Bad: Sequential external calls
    func getUserData(id string) (*User, error) {
        profile := fetchUserProfile(id)      // 50ms
        preferences := fetchPreferences(id)  // 50ms
        settings := fetchSettings(id)        // 50ms
        return combineData(profile, preferences, settings), nil
        // Total: 150ms
    }
    
    // Good: Parallel fetch or consolidated service
    func getUserDataOptimized(id string) (*User, error) {
        results := make(chan interface{}, 3)
        
        go func() { results <- fetchUserProfile(id) }()
        go func() { results <- fetchPreferences(id) }()
        go func() { results <- fetchSettings(id) }()
        
        // Total: 50ms (parallel execution)
        return combineResults(results), nil
            
    ```
    
7.  ## Use Cache to Serve Popular Data
    
    Caching eliminates repeated expensive operations by storing frequently accessed data in fast memory.
    
    ```
    import "github.com/patrickmn/go-cache"
    
    c := cache.New(5*time.Minute, 10*time.Minute)
    
    func getProduct(id string) (*Product, error) {
        if cached, found := c.Get(id); found {
            return cached.(*Product), nil // <1ms
        }
        
        product := fetchFromDB(id) // 20ms
        c.Set(id, product, cache.DefaultExpiration)
        return product, nil
    }
    
    // Cache hit ratio: 80%
    // Average latency: 0.8ms * 0.8 + 20ms * 0.2 = 4.64ms
    // Without cache: 20ms
            
    ```
    
8.  ## Add Load Balancer to Distribute Traffic
    
    Load balancers distribute requests across multiple servers, preventing any single server from becoming a bottleneck.
    
    ```
    type LoadBalancer struct {
        servers []*Server
        current int
    }
    
    func (lb *LoadBalancer) GetNextServer() *Server {
        server := lb.servers[lb.current]
        lb.current = (lb.current + 1) % len(lb.servers)
        return server
    }
    
    // Single server: 500 req/s, 100ms latency under load
    // 5 servers with LB: 2500 req/s, 20ms latency
            
    ```
    
9.  ## Scale Vertically with More Memory and Storage
    
    Increasing server resources reduces resource contention and allows more data to be processed in memory.
    
    ```
    // Memory impact on performance
    // 8GB RAM: Frequent disk swaps, 200ms query time
    // 32GB RAM: All hot data in memory, 5ms query time
    
    runtime.GOMAXPROCS(runtime.NumCPU()) // Use all available CPUs
            
    ```
    
10.  ## Use Connection Pooling
    
    Creating new database connections is expensive. Connection pools reuse existing connections, eliminating this overhead.
    
    ```
    import "database/sql"
    
    db, _ := sql.Open("postgres", connStr)
    db.SetMaxOpenConns(25)
    db.SetMaxIdleConns(10)
    db.SetConnMaxLifetime(5 * time.Minute)
    
    // New connection per request: 50ms overhead
    // Pooled connection: <1ms overhead
    // Throughput increase: 10x
            
    ```
    
11.  ## Use Efficient Data Serialization Formats
    
    JSON is human-readable but inefficient. Binary formats like Protocol Buffers reduce serialization time and payload size.
    
    ```
    // JSON serialization: 1000 objects = 250KB, 15ms
    // Protobuf serialization: 1000 objects = 85KB, 3ms
    // Performance gain: 5x faster, 66% smaller
    
    type User struct {
        ID   int64  `json:"id"`
        Name string `json:"name"`
    }
    
    // Use protobuf for high-performance scenarios
    // Use JSON for debugging and external APIs
            
    ```
    
12.  ## Use Message Queues for Background Processing
    
    Offload computationally intensive tasks to background workers, keeping the main request-response cycle fast.
    
    ```
    type TaskQueue struct {
        tasks chan Task
    }
    
    func (tq *TaskQueue) Enqueue(task Task) {
        tq.tasks <- task // Non-blocking, returns immediately
    }
    func (tq *TaskQueue) Worker() {
        for task := range tq.tasks {
            processTask(task) // Heavy computation happens async
        }
    }
    
    // Synchronous: 500ms response time
    // Async with queue: 5ms response time
            
    ```